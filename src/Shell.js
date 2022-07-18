const {enableMapSet, current, produce} = require('immer')
const {isFunction} = require('./utils')
const {SingularEventEmitter} = require('secure-event-emitter')

enableMapSet()

class Shell {
    #emitter_key = Symbol('Shell class emitter key')
    #_plugins = {}
    plugins = {}
    state = {}
    onStateChange = new SingularEventEmitter(this.#emitter_key)
    onPluginAdd = new SingularEventEmitter(this.#emitter_key)
    onPluginRemove = new SingularEventEmitter(this.#emitter_key)

    setState = (cb) => {
        if (!isFunction(cb)) {
            throw new TypeError('[[setState]] argument type must be a [[Function]]')
        }
        const prevState = this.state
        this.state = produce(this.state, (draft) => cb(draft, () => current(draft)))
        this.onStateChange.unlock(this.#emitter_key).emit(this.state, prevState)
    }

    getState = () => {
        return this.state
    }

    addPlugin = (plugin, options = {}) => {
        const pluginName = plugin.pluginName
        if (this.#_plugins[pluginName]) {
            return
        }
        this.setState(state => {
            state[pluginName] = {}
        })
        const pluginAPI = {}
        const removePlugin = plugin(this, pluginAPI, pluginName, options)
        this.plugins[pluginName] = pluginAPI
        const externalAPI = plugin?.externalAPI?.(pluginAPI)
        const p = {
            pluginName,
            plugin,
            options,
            removePlugin,
        }
        this.#_plugins[pluginName] = p
        if (externalAPI) {
            this._publicAPI[pluginName] = externalAPI
        }

        this.onPluginAdd.unlock(this.#emitter_key).emit(p, this.#_plugins)
    }

    addPlugins = (plugins) => {
        for (let i = 0; i < plugins.length; ++i) {
            this.addPlugin(
                plugins[i].plugin,
                plugins[i].options
            )
        }
    }

    removePlugin = (name) => {
        const plugin = this.#_plugins[name]
        if (!plugin) {
            return
        }
        plugin?.removePlugin?.()
        delete this.#_plugins[name]
        delete this.plugins[name]
        this.setState(state => {
            delete state[name]
        })
        delete this._publicAPI[name]

        this.onPluginRemove.unlock(this.#emitter_key).emit(plugin, this.#_plugins)
    }
}

module.exports = {
    Shell,
}
class Plugin {
    constructor() {
        this.events = {};
    }

    get pluginId() {
        throw new Error("Abstract property: pluginId");
    }

    get pluginName() {
        throw new Error("Abstract property: pluginName");
    }

    get pluginType() {
        throw new Error("Abstract property: pluginType");
    }

    /**
     * @param {"configureAppBeforeServe"|"appStarted"|"install"|"uninstall"|"cli"|"commands"} ev Event name
     * @param {Function} action Action
     */
    on(ev, action) {
        this.events[ev] = action;
    }
}

module.exports = Plugin;
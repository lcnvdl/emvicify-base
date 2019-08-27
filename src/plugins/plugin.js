class Plugin {
    constructor() {
        this.events = {};
    }

    get pluginName() {
        throw new Error("Abstract property: pluginName");
    }

    get pluginType() {
        throw new Error("Abstract property: pluginType");
    }

    /**
     * @param {"configureAppBeforeServe"|"appStarted"} ev Event name
     * @param {Function} action Action
     */
    on(ev, action) {
        this.events[ev] = action;
    }
}

module.exports = Plugin;
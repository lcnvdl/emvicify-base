class Plugin {
    constructor() {
        this.events = {};
    }

    get pluginName() {
        throw new Error("Abstract property: name");
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
class BaseDriver {
    constructor() {
        this.isRunning = false;
    }

    get type() {
        throw new Error("Abstract getter");
    }

    get info() {
        throw new Error("Abstract getter");
    }

    initialize() {
        this.isRunning = true;
    }

    dispose() {
        this.isRunning = false;
    }
}

module.exports = BaseDriver;
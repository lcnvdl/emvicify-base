const EventEmitter = require("events");
const BaseDriver = require("./base/base.driver");

class WebSocketsDriver extends BaseDriver {
    constructor() {
        super();
        this.events = new EventEmitter();
    }

    get type() {
        return "sockets";
    }

    listen() {
        throw new Error("Abstract method");
    }

    onConnect(callback) {
        this.events.on("connect", callback);
    }

    on(command, callback) {
        this.events.on("cmd-" + command, callback);
    }

    onDisconnect(callback) {
        this.events.on("disconnect", callback);
    }

    onceConnect(callback) {
        this.events.once("connect", callback);
    }

    once(command, callback) {
        this.events.once("cmd-" + command, callback);
    }

    onceDisconnect(callback) {
        this.events.once("disconnect", callback);
    }
}

module.exports = WebSocketsDriver;
const EventEmitter = require("events");
const BaseDriver = require("./base/base.driver");
const WebsocketEvent = require("./sockets/websocket.event");
const SocketConnection = require("./sockets/socket-connection");

class WebSocketsDriver extends BaseDriver {
    constructor() {
        super();
        this.events = new EventEmitter();
    }

    get type() {
        return "sockets";
    }

    get socketEvent() {
        return WebsocketEvent;
    }

    /**
     * @param {number} [port] Port
     * @param {*} [opts] Options
     */
    listen(port, opts) {
        throw new Error("Abstract method");
    }

    onConnect(callback) {
        this.events.on(WebsocketEvent.Connect, callback);
    }

    onMessage(callback) {
        this.events.on(WebsocketEvent.Message, callback);
    }

    onDisconnect(callback) {
        this.events.on(WebsocketEvent.Disconnect, callback);
    }

    onceConnect(callback) {
        this.events.once(WebsocketEvent.Connect, callback);
    }

    onceMessage(callback) {
        this.events.once(WebsocketEvent.Message, callback);
    }

    onceDisconnect(callback) {
        this.events.once(WebsocketEvent.Disconnect, callback);
    }

    createConnection(socket) {
        return new SocketConnection(socket);
    }
}

module.exports = WebSocketsDriver;
class SocketConnection {
    static __internalId = 0;

    constructor(client) {
        this.id = ++SocketConnection.__internalId;
        this.client = client;
    }
}

module.exports = SocketConnection;
const expect = require("chai").expect;
const WebSocketsDriver = require("../src/drivers/websockets.driver");

describe("WebSockets Driver", () => {
    describe("constructor", () => {
        it("should work fine", () => {
            let instance = new WebSocketsDriver();
            expect(instance).to.be.ok;
        });
    });
});

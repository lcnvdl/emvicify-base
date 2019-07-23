const expect = require("chai").expect;

describe("Index.js", () => {
    it("require should work", () => {
        const package = require("../index");
        expect(package).to.be.ok;
    });
});

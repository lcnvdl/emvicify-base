class BaseEngine {
    /**
     * @virtual
     */
    prepare() {
    }
    /**
     * @abstract
     * @returns {Promise<any>}
     */
    serve() {
    }
    /**
     * @virtual
     */
    close() {
    }
}

module.exports = BaseEngine;
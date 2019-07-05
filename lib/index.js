const path = require('path');

/**
 * Ensure the app has a Vuex store
 *
 * @param {Object} options
 *
 * @throws {Error}
 */
function validateOptions(options) {
    if (!options.store) {
        throw new Error('Enable vuex store by creating `store/index.js`.');
    }
}

module.exports = function pageStore() {
    validateOptions(this.options);

    this.addPlugin(path.join(__dirname, 'store.js'));
    this.addPlugin(path.join(__dirname, 'middleware.js'));

    this.options.router = this.options.router || {};
    this.options.router.middleware = this.options.router.middleware || [];
    this.options.router.middleware = [
        ...this.options.router.middleware,
        'pageStore',
    ];
};

module.exports.meta = require('../package.json');

/**
 * Set up the page meta data store
 *
 * @param {Object} context
 */
export default function pageStoreStore(context) {
    context.app.store.registerModule('pageStore', {
        namespaced: true,

        /**
         * Get the default state
         *
         * @returns {Object}
         */
        state() {
            return {
                data: {},
            };
        },

        mutations: {
            /**
             * Set a key and value
             *
             * @param {Object} state
             * @param {Object} values
             */
            set(state, values) {
                state.data = {
                    ...state.data,
                    ...values,
                };
            },

            /**
             * Clear the state
             *
             * @param {Object} state
             */
            clear(state) {
                state.data = {};
            },
        },

        getters: {
            /**
             * Get a key from the state
             *
             * @param {Object} state
             *
             * @returns {Function}
             */
            get(state) {
                return key => state.data[key];
            },
        },
    });
};

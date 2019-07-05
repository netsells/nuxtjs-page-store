import Middleware from './middleware'; // Importing from .nuxt folder

Middleware.pageStore = function({ store, from, route }) {
    if (from && route.path.startsWith(from.path)) {
        return;
    }

    store.commit('pageStore/clear');
};

# NuxtJS Page Store

A page data store which clears itself down between pages using nuxt middleware.
Useful for passing data from the page to the layout.

## Installation

```
yarn add @netsells/nuxtjs-page-store
```

## Usage

Add to your nuxt config:

```
    modules: [
        '@netsells/nuxtjs-page-store',
    ],
```

### set

Set the data object, is merged with existing data

```javascript
this.$store.commit('pageStore/set', {
    title: 'Homepage',
    subtitle: 'Foo bar',
})
```

### clear

Clear all the page data. Is called internally between pages

```javascript
this.$store.commit('pageStore/clear');
```

### getters

```javascript

import { mapGetters } from 'vuex';

export default {
    name: 'my-layout',

    computed: {
        ...mapGetters('pageStore', ['get']),
    },
};
```

And in your template:

```html
<div>
    <h1>{{ get('title') }}</h1>
    <h2>{{ get('subtitle') }}</h2>
    <nuxt />
</div>
```

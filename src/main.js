import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'UA-206254002-3',
    router
});

library.add(fas, fab);

createApp(App)
    .use(router)
    .component("FontAwesome", FontAwesomeIcon)
    .mount('#app');
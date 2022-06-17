import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag-next"

library.add(fas, fab);

const app = createApp(App);

app.use(VueGtag, {property: {id: "UA-206254002-3"}});
app.use(router);
app.component("FontAwesome", FontAwesomeIcon)
app.mount("#app");

// createApp(App)
//     .use(VueGtag, {config: { id: "UA-206254002-3" }})
//     .use(router)
//     .component("FontAwesome", FontAwesomeIcon)
//     .mount('#app');
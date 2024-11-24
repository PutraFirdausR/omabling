import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Footer from "./components/Footer.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.component("Footer", Footer);
app.mount("#app");

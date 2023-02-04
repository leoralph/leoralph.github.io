import { createApp } from "vue";

import App from "./App.vue";
import { resgisterPlugins } from "./plugins";

const app = createApp(App);

resgisterPlugins(app);

app.mount("#app");

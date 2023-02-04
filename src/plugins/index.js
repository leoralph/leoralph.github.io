import router from "../router";
import vuetify from "./vuetify";
import pinia from "../stores";

export function resgisterPlugins(app) {
    app.use(vuetify).use(router).use(pinia);
}

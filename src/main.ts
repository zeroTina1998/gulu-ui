import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes:[
        {path:"/doc",component:Doc},
        {path:"/",component:Home}
    ]
});

const app = createApp(App)
app.use(router)
app.mount("#app");

import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import Switchdemo from "./components/Switchdemo.vue"
import Buttondemo from "./components/Buttondemo.vue"
import Dialogdemo from "./components/Dialogdemo.vue"
import Tabsdemo from "./components/Tabsdemo.vue"
import DocDemo from "./components/DocDemo.vue"
const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes:[
        {path:"/",component:Home},
        {path:"/doc",component:Doc,children:[
            {path:"/",component:DocDemo},
            {path:"switch",component:Switchdemo},
            {path:"button",component:Buttondemo},
            {path:"dialog",component:Dialogdemo},
            {path:"tabs",component:Tabsdemo}
        ]},
        
    ]
});
router.afterEach(() => {
     console.log("路由切换了")
})
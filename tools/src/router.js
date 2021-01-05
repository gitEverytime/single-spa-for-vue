import vue from 'vue'
import Router from 'vue-router'
import main from './views/main/Main.vue'
import drag from './views/drag/Drag.vue'
vue.use(Router)
const routes = [
    {
        path: '/tools',
        name: 'tools',
        meta:{
            // 是否显示头部菜单
            hiddenHead:true
        },
        component: main,
        children:[
            {
                path: 'drag/:id',
                name: 'drag',
                component: drag,
            }
        ]
    },
]

const router = new Router({
    routes: routes
})
export default router

import vue from 'vue'
import Router from 'vue-router'
import main from './views/main/Main.vue'
import drag from './views/drag/Drag.vue'
import form from './views/form/Form.vue'
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
                path: 'main/drag/:type/:id',
                name: 'drag',
                component: drag,
            },
            {
                path: 'form/drag/:type/:id',
                name: 'form',
                component: form,
            }
        ]
    },
]

const router = new Router({
    routes: routes
})
export default router

import vue from 'vue'
import Router from 'vue-router'
import list from './views/list.vue'
import goods from './views/goods.vue';
import detail from './views/detail.vue'
vue.use(Router)
const routes = [
    // {
    //     path:'/',
    //     redirect:'/goods'
    // },
    {
        path: '/iframe',
        name: 'home',
        component: list,
        children:[
            {
                path:'detail',
                name: 'detail',
                component: () => import(/* webpackChunkName: "goods-detail" */ './views/detail.vue')
            }
        ]
    },
]

const router = new Router({
    mode: "history",
    routes: routes
})
export default router

import vue from 'vue'
import Router from 'vue-router'
import list from './views/list.vue'
import goods from './views/goods.vue';
import detail from './views/detail.vue'
vue.use(Router)
const routes = [
    {
        path:'/',
        redirect:'/goods'
    },
    {
        path: '/goods',
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
    base: "/goods/",
    routes: routes
})
export default router

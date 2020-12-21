import vue from 'vue'
import Router from 'vue-router'
import list from './views/list.vue'
import detail from './views/detail.vue'
vue.use(Router)
const routes = [
    {
        path:'/',
        redirect: '/customers'
    },
    {
        path: '/customers',
        name: 'home',
        component: list,
        children:[
            {
                path: 'detail',
                name: 'home',
                component: detail
            }
        ]
    },
    {
        path: '/detail/:id',
        name: 'home',
        component: detail
    }
    // {
    //     path:'/customers/list',
    //     component: list,
    // },
    // {
    //     path:'/customers/new',
    //     component: () => import(/* webpackChunkName: "customers-new" */ './views/newCustomer.vue'),
    //     meta:{
    //         hiddenSideNav:true
    //     },
    // },
    // {
    //     path: '/customers/detail',
    //     name: 'detail',
    //     component: () => import(/* webpackChunkName: "customers-detail" */ './views/detail.vue')
    // }
]
export default new Router({
    mode: "history",
    base: "/customers/",
    routes: routes
})

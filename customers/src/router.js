import vue from 'vue'
import Router from 'vue-router'
import list from './views/list.vue'
import detail from './views/detail.vue'
vue.use(Router)
const routes = [
    // {
    //     path:'/',
    //     redirect: '/customers'
    // },
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
        path: '/detail',
        name: 'home',
        component: detail
    }
]
export default new Router({
    //mode: "history",
    routes: routes
})

import vue from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import singleSpaVue from 'single-spa-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {startListen} from './eventListener.ts';
import apis from './api/index.ts'
vue.use(Antd);
vue.config.productionTip = false;
/**
 * 全局配置common方法
 */
Object.assign(vue.prototype,{
    apis,          //ajax封装的请求
});
const appOptions = {
    el:'#app',
    render: (h) => h(App),
    router,
    beforeCreate() {
        startListen(this)
    },
    methods:{
        logout() {
            this.$router.push('/account');
            var expires = -1 * 24 * 60 * 60 * 1000;
            var date = new Date(+new Date()+expires).toUTCString();
            document.cookie="venderId=10004;expires=" + date
            document.cookie="zone_id=1000;expires=" + date
            document.cookie="VSSSESSID=needaamu3ffri2e1bd5nfn1ok7;expires=" + date
            document.cookie="lshLogin=1;expires="+date
            document.cookie="warehouse_id=DC10004;expires=" + date
            document.cookie="MISSESSID=22rqf7hm35gus6ih53h7h7ifd0;expires=" + date
        },
        time(){
            console.log('1');
        }
    }
}
const vueLifecycles = singleSpaVue({
    Vue:vue,
    appOptions: appOptions,
});

export const bootstrap = vueLifecycles.bootstrap;   //启动时
export const mount = vueLifecycles.mount            //挂载时
export const unmount = vueLifecycles.unmount;       //卸载时

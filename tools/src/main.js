import vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/base.ts';
import singleSpaVue from 'single-spa-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/style/base.scss'
import apis from './api/index.ts'
import { isInGrape,GrapeLifecycle } from '@hydesign/grape'
vue.use(Antd);
vue.config.productionTip = false;
let vueLifecycles = {};
const appOptions = {
  el:'#main',
  render: (h) => h(App),
  router,
  store
};
/**** 添加这里 ****/
if (!window.singleSpaNavigate) { // 如果不是single-spa模式
    delete appOptions.el;
    // 独立运行
    new Vue({
        render: (h) => h(App),
        router,
    }).$mount('#main')
}else{
    vueLifecycles = singleSpaVue({
        Vue:vue,
        appOptions: appOptions,
    });
}
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

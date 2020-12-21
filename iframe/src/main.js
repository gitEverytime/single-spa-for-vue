import vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/base';
import singleSpaVue from 'single-spa-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
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
  el:'#main',
  render: (h) => h(App),
  router,
  store
};
/**** 添加这里 ****/
if (!window.singleSpaNavigate) { // 如果不是single-spa模式
  delete appOptions.el;
  new Vue(appOptions).$mount('#main');
}
// if(process.env.VUE_APP_SINGLERUN ==='true') {
//   import('element-ui/lib/theme-chalk/index.css');
//   new vue(appOptions)
// }
const vueLifecycles = singleSpaVue({
  Vue:vue,
  appOptions: appOptions,
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

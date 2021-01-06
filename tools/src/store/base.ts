import Vue from 'vue'
// @ts-ignore
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:0,
        light_color:'#323e52',                 //全局背景浅颜色
        deep_color:'#283142',                  //全局背景深颜色
        default_color:'#ffffff',               //全局默认字体颜色
        text_color:'#99a5be',                  //全局文本颜色
        open_status:true,                      //侧边展开收起状态
        active_color:'#009dff',                //活跃状态颜色
        comp_base_info:{},                     //当前组件基本信息
        comp_layout_info:{},                   //当前容器基本信息
        layout_active_class:'',                //当前选中栅格class
        operate_layer:'main',                  //当前操作的层：main:主界面层，mod:弹出层
    },
    mutations:{
        increment(state){
            state.count ++
        },
        setLightColor (state,data) {
            state.light_color = data;
        },
        setDeepColor (state,data) {
            state.deep_color = data;
        },
        setTextColor (state,data) {
            state.text_color = data;
        },
        setOpenStatus (state,data) {
            state.open_status = data;
        },
        setDefaultColor (state,data) {
            state.default_color = data;
        },
        setCompBaseInfo (state,data) {
            state.comp_base_info = data;
        },
        setCompLayoutInfo (state,data) {
            state.comp_layout_info = data;
        },
        setLayoutActiveClass (state,data) {
            state.layout_active_class = data;
        },
    }
})
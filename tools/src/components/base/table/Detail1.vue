<template>
    <div class="l-detail-table" >
        <table border="1" style="border: #999999 dashed 1px">
            <tr v-for="(tr,r_index) in form.table_data" class="tr">
                <td
                    v-for="(td,t_key) in tr.children"
                    :style="{
                        width:td.width + 'px',
                        height:td.height + 'px',
                        border:`${td.color} dashed 1px`
                    }"
                    :class="[
                        'td',
                        'l-td-' + tr.time + '-' + td.time
                    ]"
                    :row_index="r_index"
                    :col_index="t_key"
                    @contextmenu.prevent="mouseclick(r_index,t_key,tr.type,td.type)"
                >
                    <a-dropdown :trigger="['contextmenu']">
                        <!--                    head-->
                        <comp-detail-head-td
                           v-if="tr.type === 'head'"
                           :data="td"
                           :t_key="t_key"
                           :index="index"
                        ></comp-detail-head-td>
                        <!--                    body-->
                        <comp-detail-body-td
                           v-if="tr.type === 'body'"
                           :data="td"
                           :t_key="t_key"
                           :index="index"
                           :className="'l-td-' + tr.time + '-' + td.time"
                        ></comp-detail-body-td>
                        <!--                    foot-->
                        <comp-detail-foot-td
                           v-if="tr.type === 'foot'"
                           :data="td"
                           :t_key="t_key"
                           :index="index"
                        ></comp-detail-foot-td>
                        <a-menu slot="overlay" @click="onClick">
                            <a-menu-item key="1">
                                插入行(在上方)
                            </a-menu-item>
                            <a-menu-item key="2">
                                插入行(在下方)
                            </a-menu-item>
                            <a-menu-item key="3">
                                插入列(在左侧)
                            </a-menu-item>
                            <a-menu-item key="4">
                                插入列(在右侧)
                            </a-menu-item>
                            <a-menu-item key="5">
                                删除行
                            </a-menu-item>
                            <a-menu-item key="6">
                                删除列
                            </a-menu-item>
                            <a-menu-item key="7">
                                行高
                            </a-menu-item>
                            <a-menu-item key="8">
                                列宽
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </td>
            </tr>
        </table>
        <span class="l-detail-head-icon">
             <i
                 class="iconfont icon-mingxibiao"
                 :style="{
                    'color':'#000000',
                    fontSize:'40px'
                 }"
             ></i>
        </span>
        <!--            删除-->
        <span class="closeLayoutBtn" title="删除" @click="handleClickDel(index)">
            <a-icon
                type="delete"
                :style="{
                    'color':$store.state.active_color
                }"
            />
        </span>
    </div>
</template>

<script>

import 'jquery-ui-dist/jquery-ui'
import 'jquery-ui-dist/jquery-ui.min.css'
import CompDetailHeadTd from './detail/DetailHeadTd.vue'
import CompDetailBodyTd from './detail/DetailBodyTd.vue'
import CompDetailFootTd from './detail/DetailFootTd.vue'
import source from '../../../ts/data_manage/source.ts'
import $ from "jquery";
// @ts-ignore
import { message } from 'ant-design-vue';
/**
 *  全局提示属性调整
 */
message.config({
    top: `100px`,
    duration: 2,
    maxCount: 3,
    getContainer:() => document.getElementById('tools-project')
});
export default {
    name: "detail1",
    components:{
        CompDetailHeadTd,
        CompDetailBodyTd,
        CompDetailFootTd
    },
    props:{
        form:{
            type:Object
        },
        index:{
            type:Number
        }
    },
    data(){
        return{
            sources:source.layout_info,
            t_index:null,
            t_key:null,
            r_type:null,
            t_type:null
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
        vm.$nextTick(() => {
            vm.resizeable_func();
        })
    },
    methods:{
        /**
         * 挂载拖拽的方法
         */
        resizeable_func(){
            let vm = this;
            vm.form.table_data.forEach((tr,index) => {
                tr.children.forEach((td,key) => {
                    $(`.l-td-${tr.time}-${td.time}`).resizable({
                        zIndex:99,
                        autoHide: true,
                        ghost: true,
                        opacity:0,
                        handles: "e, s",
                        minHeight: 30,
                        stop: function (event,ui) {
                            if(Number.parseInt(ui.originalSize.width) !== Number.parseInt(ui.size.width)) {
                                /**
                                 * 给 这一列的每个td 赋相同的值:宽度变化
                                 */
                                vm.form.table_data.forEach((form,t_index) => {
                                    form.children.forEach((child,t_key) => {
                                        if(key === t_key) {
                                            child.width = ui.size.width.toFixed(2);
                                        }
                                    });
                                });
                            }else{
                                /**
                                 * 给 这一行的每个td 赋相同的值:高度变化
                                 */
                                tr.children.forEach((child,key) => {
                                    child.height = ui.size.height.toFixed(2);
                                });
                            }
                        }
                    });
                })
            })
        },
        /**
         * 删除
         */
        handleClickDel(){
            let vm = this;
            vm.sources[vm.index].isHide = true;
        },
        /**
         * 拿到右击的行索引，列索引
         */
        mouseclick(index,key,r_type,t_type){
            let vm = this;
            vm.t_index = index;
            vm.t_key = key;
            vm.r_type = r_type;
            vm.t_type = t_type;
        },
        /**
         * 选中事件
         * @param key
         */
        onClick({ key }) {
            const vm = this;
            let tr = JSON.parse(JSON.stringify(vm.form.table_data[vm.t_index]));
            let td_data = tr.children[vm.t_key];
            switch (key) {
                case '1':   //插入行(在上方)
                    tr['time'] = Date.parse(new Date()) + 1;
                    tr['children'].forEach((td,index) => {
                        td.time = Date.parse(new Date()) + index;
                        td.title = '';
                    })
                    vm.form.table_data.splice(vm.t_index,0,tr);
                    break;
                case '2':   //插入行(在下方)
                    tr['time'] = Date.parse(new Date()) + 1;
                    tr['children'].forEach((td,index) => {
                        td.time = Date.parse(new Date()) + index;
                        td.title = '';
                    })
                    vm.form.table_data.splice(vm.t_index + 1,0,tr);
                    break;
                case '3':   //插入列(在左方)
                    vm.form.table_data.forEach((tr,r_index) => {
                        tr.children.forEach((td,d_index) => {
                            if(d_index === vm.t_key) {
                                td_data.time = Date.parse(new Date()) + d_index;
                                td_data.title = '';
                                tr.children.splice(vm.t_key,0,td_data);
                            }
                        })
                    })
                    break;
                case '4':   //插入列(在左方)
                    vm.form.table_data.forEach((tr,r_index) => {
                        tr.children.forEach((td,d_index) => {
                            if(d_index === vm.t_key) {
                                td_data.time = Date.parse(new Date()) + d_index;
                                td_data.title = '';
                                tr.children.splice(vm.t_key + 1,0,td_data);
                            }
                        })
                    })
                    break;
                case '5':   //删除行
                    if(
                        vm.form.table_data.filter(data => data.type === tr.type).length === 1
                    ) {
                        message.warning({
                            content:'请保持明细表原始表格形态！',
                            getContainer:'.main-project'
                        });
                        return
                    }
                    vm.form.table_data.splice(vm.t_index,1);
                    break;
                case '6':   //删除列
                    vm.form.table_data[vm.t_index].children.splice(vm.t_key,1);
                    break;
                case '7':   //行高

                    break;
                case '8':   //列宽

                    break;
            }
            /**
             * 重绘方法
             */
            vm.$nextTick(() => {
                vm.resizeable_func();
            })
        },
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .l-detail-table{
        overflow-x: scroll;
        overflow-y: hidden;
        position: relative;
        margin-bottom: 5px;
    }
    table{
        table-layout: fixed;
        width: 100%;
        max-width: 100%;
        border: 0;
        border-spacing: 0;
        tr{
            position: relative;
            td{
                position: relative;
            }
        }
    }
    .l-detail-head-icon{
        position: absolute;
        top: 0px;
        left:0px;
    }
    .closeLayoutBtn{
        position: absolute;
        top:2px;
        right: 2px;
        width: 18px;
        height: 19px;
        cursor: pointer;
        z-index: 999;
    }
    .ui-resizable-handle{
        display: none;
    }
</style>
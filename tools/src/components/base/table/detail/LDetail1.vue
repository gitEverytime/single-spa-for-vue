<template>
    <div class="l-detail-table-box">
        <div class="l-detail-table" >
            <table border="1" style="border: #999999 dashed 1px; background: transparent">
                <tr
                    v-for="(tr,r_index) in form.table_data"
                    class="tr"
                    :id="'selectable' + r_index"
                >
                    <td
                        v-for="(td,t_key) in tr.children"
                        :style="{
                            width:td.width + 'px',
                            height:td.height + 'px',
                            border:`${td.color} dashed 1px`
                        }"
                        v-show="tr.type === 'head'|| tr.type === 'body' || (tr.type === 'foot' && td.showTd)"
                        :colspan="td.cols"
                        :class="[
                            'td',
                            'l-td-' + tr.time + '-' + td.time,
                            {
                                'ui-widget-content':tr.type === 'foot'
                            }
                        ]"
                        :value="t_key"
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
                                <a-menu-item key="9" :disabled="chooseArr.length <= 1 ">
                                    合并单元格
                                </a-menu-item>
                                <a-menu-item key="10">
                                    拆分单元格
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </td>
                </tr>
            </table>
            <!--        set height-->
            <comp-set-height-modal
                v-if="visibleHeight.show"
                :form="form"
                :visibleHeight="visibleHeight"
                :t_index="t_index"
                :t_key="t_key"
            ></comp-set-height-modal>
            <!--        set width-->
            <comp-set-width-modal
                v-if="visibleWidth.show"
                :form="form"
                :visibleWidth="visibleWidth"
                :t_index="t_index"
                :t_key="t_key"
            ></comp-set-width-modal>
        </div>
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

import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-dist/jquery-ui.min.css';
import CompDetailHeadTd from './DetailHeadTd.vue';
import CompDetailBodyTd from './DetailBodyTd.vue';
import CompDetailFootTd from './DetailFootTd.vue';
import CompSetHeightModal from '../../modal/LSetHeightModal.vue';
import CompSetWidthModal from '../../modal/LSetWidthModal.vue'
import source from '../../../../ts/data_manage/source.ts';
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
        CompDetailFootTd,
        CompSetHeightModal,
        CompSetWidthModal
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
            t_type:null,
            visibleHeight:{
                show:false
            },
            visibleWidth:{
                show:false
            },
            chooseArr:[]
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
        vm.selectable_func();
        vm.$nextTick(() => {
            vm.resizeable_func();
        })
    },
    methods:{
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
                    vm.appendRowFunc(tr,'up');
                    break;
                case '2':   //插入行(在下方)
                    vm.appendRowFunc(tr,'down');
                    break;
                case '3':   //插入列(在左方)
                    vm.appendColFunc(td_data,'left');
                    break;
                case '4':   //插入列(在左方)
                    vm.appendColFunc(td_data,'right');
                    break;
                case '5':   //删除行
                    vm.deleteRowFunc(tr);
                    break;
                case '6':   //删除列
                    vm.deleteColFunc();
                    break;
                case '7':   //行高
                    vm.visibleHeight.show = true;
                    break;
                case '8':   //列宽
                    vm.visibleWidth.show = true;
                    break;
                case '9':   //合并单元格
                    vm.mergeColFunc();
                    break;
                case '10':   //拆分单元格
                    vm.splitColFunc();
                    break;
            }
            /**
             * 重绘方法
             */
            vm.$nextTick(() => {
                vm.resizeable_func();
            })
        },
        /**
         * 插入行（之上/之下）
         */
        appendRowFunc(tr,position){
            let vm = this;
            tr['time'] = Date.parse(new Date()) + 1;
            tr['children'].forEach((td,index) => {
                td.time = Date.parse(new Date()) + index;
                td.cols = null;
                td.title = '';
            })
            position === 'before'
                ?
                vm.form.table_data.splice(vm.t_index,0,tr)
                :
                vm.form.table_data.splice(vm.t_index + 1,0,tr);
        },
        /**
         * 插入列（之前/之后）
         */
        appendColFunc(td_data,position){
            let vm = this;
            let showId = null;
            let i = null;
            vm.form.table_data.forEach((tr,r_index) => {
                tr.children.forEach((td,d_index) => {
                    if(d_index === vm.t_key) {
                        td_data.time = Date.parse(new Date()) + d_index;
                        td_data.title = '';
                        position === 'left'
                            ?
                            tr.children.splice(vm.t_key,0,td_data)
                            :
                            tr.children.splice(vm.t_key + 1,0,td_data);
                        /**
                         * 更新合并列
                         */
                        position === 'right' ? showId = !tr.children[d_index + 1].showTd : !tr.children[d_index].showTd;
                        if((tr.type === 'foot') && showId) {
                            i = d_index;
                            while (!tr.children[i].cols) { i--; }
                            tr.children[i].cols += 1;
                        }
                    }
                })
            })
        },
        /**
         * 删除行
         */
        deleteRowFunc(tr){
            let vm = this;
            if(vm.form.table_data.filter(data => data.type === tr.type).length === 1) {
                message.warning({
                    content:'请保持明细表原始表格形态！',
                    getContainer:'.main-project'
                });
                return
            }
            vm.form.table_data.splice(vm.t_index,1);
        },
        /**
         * 删除列
         */
        deleteColFunc(){
            let vm = this;
            vm.form.table_data.forEach((tr,r_index) => {
                tr.children.splice(vm.t_key,1);
            })
        },
        /**
         * 合并单元格
         */
        mergeColFunc(){
            let vm = this;
            vm.chooseArr.forEach((i,index) => {
                if(index > 0) vm.form.table_data[vm.t_index].children[i].showTd = false;
            })
            vm.form.table_data[vm.t_index].children[vm.chooseArr[0]].cols = vm.chooseArr.length;
        },
        /**
         * 拆分单元格
         */
        splitColFunc(){
            let vm = this;
            let currentTd = vm.form.table_data[vm.t_index].children[vm.t_key];
            let arr = [];
            if(currentTd.cols) arr = vm.generateArray(vm.t_key,(vm.t_key + currentTd.cols - 1));
            arr.forEach((i,index) => {
                if(index > 0) vm.form.table_data[vm.t_index].children[i].showTd = true;
            })
            vm.form.table_data[vm.t_index].children[vm.chooseArr[0]].cols = null;
        },
        /**
         * 挂载多选的方法
         */
        selectable_func() {
            let vm = this;
            $( "#selectable2" ).selectable({
                stop: function() {
                   let arr = [];
                    $( ".ui-selected", this ).each(function() {
                        let index = $( "#selectable2 td" ).index( this );
                        if(index !== -1) arr.push(index);
                    });
                    vm.chooseArr = vm.generateArray(arr[0],arr[arr.length-1]);
                }
            });
        },
        /**
         * 生成一个从 start 到 end 的连续数组
         * @param start
         * @param end
         */
        generateArray (start, end) {
            return Array.from(new Array(end + 1).keys()).slice(start)
        },
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
                                            child.width = Number.parseInt(ui.size.width);
                                        }
                                    });
                                });
                            }else{
                                /**
                                 * 给 这一行的每个td 赋相同的值:高度变化
                                 */
                                tr.children.forEach((child,key) => {
                                    child.height = Number.parseInt(ui.size.height);
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
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .l-detail-table-box{
        overflow: hidden;
        position: relative;
    }
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
                background: transparent;
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
    #selectable2 .ui-selecting { }
    #selectable2 .ui-selected { background: rgba(50, 62, 82,0.4);  color: #999999; }
</style>
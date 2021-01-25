<template>
    <div class="l-detail-table" >
        <table border="1" style="border: #999999 dashed 1px">
            <tr v-for="(tr,index) in form.table_data" class="tr" style="height: 40px">
                <td
                    v-for="(td,t_key) in tr.children"
                    :style="{
                        width:td.width + 'px',
                        border:`${td.color} dashed 1px`
                    }"
                    :class="[
                        'td',
                        'l-td-' + index + '-' + t_key,
                    ]"
                    :row_index="index"
                    :col_index="t_key"
                >
                    <!--                    head-->
                    <comp-detail-head-td
                        v-if="tr.type === 'head'"
                        :data="td"
                        :index="t_key"
                    ></comp-detail-head-td>
                    <!--                    body-->
                    <comp-detail-body-td
                        v-if="tr.type === 'body'"
                        :data="td"
                        :index="t_key"
                        :className="'l-td-' + index + '-' + t_key"
                    ></comp-detail-body-td>
                    <!--                    foot-->
                    <comp-detail-foot-td
                        v-if="tr.type === 'foot'"
                        :data="td"
                        :index="t_key"
                    ></comp-detail-foot-td>
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
import $ from "jquery";
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

        }
    },
    created() {
    },
    mounted() {
        let vm = this;
        /**
         * 克隆组件
         */
        vm.$nextTick(() => {
            vm.form.table_data.forEach((tr,index) => {
                tr.children.forEach((td,key) => {
                    $(`.l-td-${index}-${key}`).resizable({
                        zIndex:99,
                        autoHide: true,
                        animate: false,
                        opacity:0,
                        minHeight: 20,
                        stop: function (event,ui) {
                            td.height = ui.size.height.toFixed(2);
                            td.width = ui.size.width.toFixed(2);
                            console.log(td)
                        }
                    });
                })
            })
        })
    },
    methods:{
        /**
         * 删除
         */
        handleClickDel(){
            let vm = this;
            vm.sources[vm.index].isHide = true;
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
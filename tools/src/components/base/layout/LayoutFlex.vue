<template>
    <div
        class="l-row-wrap"
        @click="handleClickDragElement"
        :style="{
            'min-height':form.height + 'px'
        }"
        :class="'l-row-wrap' + form.time"
    >
        <!--            格子渲染-->
        <temp-layout-col :form="form" :index="index"></temp-layout-col>
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

<script lang="ts">
import TempLayoutCol from '../../base/layout/LayoutCol.vue'
// @ts-ignore
import $ from 'jquery'
// @ts-ignore
import source from '../../../ts/data_manage/source.ts'
import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-dist/jquery-ui.min.css';
export default {
    name: "LoyoutFlex",
    components:{
        TempLayoutCol
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
            activeIndex:'',
            sources:source.layout_info,
        }
    },
    mounted() {
        let vm = this;
        vm.$nextTick(() => {
            $(`.l-row-wrap${vm.form.time}`).resizable({
                zIndex:99,
                autoHide: true,
                ghost: true,
                opacity:0,
                handles: "s",
                minHeight: 30,
                stop: function (event,ui) {
                    vm.form.height = Number.parseInt(ui.size.height);
                }
            })
        })
    },
    created() {
    },
    methods:{
        /**
         * 删除
         */
        handleClickDel(index){
            let vm = this;
            vm.sources.splice(index,1);
        },
        /**
         * 点击选中当前组件，回传数据给公共管理库，记录
         */
        handleClickDragElement(){
            let vm = this;
            vm.$store.commit('setCompLayoutInfo',vm.form);
        },
    }
}
</script>

<style scoped lang="scss">
    .l-row-wrap {
        display: flex;
        flex-flow: row wrap;
        position: relative;
        margin-bottom: 2px;
    }
    .l-mar-b-10{
        margin-bottom:5px;
    }
    .vdr {
        border: none;
        position: relative;
    }
    .l-bor-right{
        border-right:#999 dashed 1px
    }
    .activeColor{
        border: #009dff solid 2px !important;
    }
    .dotted{
        border-top:#999 dashed 1px;
        border-left:#999 dashed 1px;
        border-right:#999 dashed 1px
    }
    .dotted:last-child{
        border-bottom: #999 dashed 1px;
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
    .insertLayoutBtn{
        position: absolute;
        top:2px;
        left: 2px;
        width: 18px;
        height: 19px;
        cursor: pointer;
        z-index: 999;
    }
    .ui-resizable-resizing{
        border:#999 dashed 1px
    }
</style>
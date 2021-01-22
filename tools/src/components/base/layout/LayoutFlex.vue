<template>
    <vue-draggable-resizable
        v-if="!form.isHide"
        @dragging="onDrag"
        @resizing="onResize"
        :onDrag="onDragStartCallback"
        :onResize="onResizeCallback"
        :min-height="34"
        :h="Number(form.height)"
        :x="Number(form.left)"
        :y="Number(form.top)"
        :handles="['bm']"
        class="l_input l_handle_active l-mar-b-10"
        :class="'l_input' + index"
        :style="{
            width:'100%',
            zIndex:'888'
        }"
    >
        <div
            class="l-row-wrap"
            @click="handleClickDragElement"
            :style="{
                height:'100%'
            }"
            :class="{

            }"
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
    </vue-draggable-resizable>
</template>

<script lang="ts">
import TempLayoutCol from '../../base/layout/LayoutCol.vue'
// @ts-ignore
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import source from '../../../ts/data_manage/source.ts'
export default {
    name: "LoyoutFlex",
    components:{
        VueDraggableResizable,
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
    methods:{
        /**
         * 删除
         */
        handleClickDel(index){
            let vm = this;
            vm.sources[index].isHide = true;
        },
        /**
         * 增行
         */
        handleClickInsert(){
            let vm = this;
            let obj = JSON.parse(JSON.stringify(vm.form));
            obj.type = 'l_flex';
            obj.width = '100%';
            obj.height = '50';
            obj.flex =  vm.form.flex;
            obj.operateLayer = vm.$store.state.operate_layer;
            obj.name = vm.form.name + vm.sources.length;
            obj.index = vm.sources.length;
            vm.$set(vm.sources,vm.sources.length,vm.form)
        },
        /**
         * 点击选中当前组件，回传数据给公共管理库，记录
         */
        handleClickDragElement(){
            let vm = this;
            vm.$store.commit('setCompLayoutInfo',vm.form);
        },
        /**
         * 点击选中当前格子
         */
        handleClickCol(key){
            let vm = this;
            vm.$store.commit('setLayoutActiveClass','l-append-' + vm.index + '-' + key);
        },
        /**
         * 缩放回调
         * @param x
         * @param y
         * @param width
         * @param height
         */
        onResize(x, y, width, height) {
            let vm = this;
            vm.form.top = Number.parseInt(y);
            vm.form.left = Number.parseInt(x);
            vm.form.width = Number.parseInt(width);
            vm.form.height = Number.parseInt(height);
        },
        /**
         * 拖拽回调
         * @param x
         * @param y
         */
        onDrag(x, y) {
            let vm = this;
            vm.form.top = Number.parseInt(y);
            vm.form.left = Number.parseInt(x);
        },
        /**
         * 禁止拖拽
         * @param ev
         */
        onDragStartCallback(ev){
            return false;
        },
        /**
         * 禁止宽度变化
         * @param handle
         * @param x
         * @param y
         * @param width
         * @param height
         */
        onResizeCallback(handle, x, y, width, height){
            let vm = this;
            if(width !== 200) {
                return false;
            }else{
                return true
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .l-row-wrap {
        display: flex;
        flex-flow: row wrap;
        position: relative;
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
    .active{
        //border:#999 dashed 1px
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
</style>
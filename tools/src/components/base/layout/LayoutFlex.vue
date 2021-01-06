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
        class="l_input l_handle_active l-mar-b-10"
        :class="'l_input' + index"
        :style="{
            width:'100%',
        }"
    >
        <div
            class="l-row"
            @click="handleClickDragElement"
            :style="{
                borderTop:'#999 dashed 1px',
                borderLeft:'#999 dashed 1px',
                borderRight:'#999 dashed 1px',
                height:'100%'
            }"
        >
            <div
                v-for="(n,key) of Number(form.flex)"
                class="l-col"
                :class="
                    [
                        'l-col-' + (24/Number(form.flex)),
                        'l-append-' + index + '-' + key,
                        {'activeColor': $store.state.layout_active_class === 'l-append-' + index + '-' + key}
                    ]
                "
                @click="handleClickCol(key)"
                :style="{
                    borderRight:'#999 dashed 1px',
                    height:'100%'
                }"
            >
                <!--基础组件渲染盒子-->
                <temp-base-render-box :className="'.l-append-' + index + '-' + key"></temp-base-render-box>
            </div>
        </div>
    </vue-draggable-resizable>
</template>

<script lang="ts">
import TempBaseRenderBox from '../../../components/toolbar/BaseRenderBox.vue'
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
export default {
    name: "LoyoutFlex",
    components:{
        VueDraggableResizable,
        TempBaseRenderBox
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
            activeIndex:''
        }
    },
    methods:{
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
    .l-row {
        display: flex;
        flex-flow: row wrap;
    }
    .l-row:last-child{
        border-bottom: #999 dashed 1px;
    }
    .l-col{
        position: relative;
        cursor: pointer;
    }
    .l-col-24 {
        display: block;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .l-col-12 {
        display: block;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .l-col-8 {
        display: block;
        flex: 0 0 33.33%;
        max-width: 33.33%;
    }
    .l-col-6 {
        display: block;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .l-mar-b-10{
        margin-bottom: 10px;
    }
    .vdr {
        border: none;
    }
    .active{
        //border:#999 dashed 1px
    }
    .activeColor{
        border: #009dff solid 2px !important;
    }
</style>
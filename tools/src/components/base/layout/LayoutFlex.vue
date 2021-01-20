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
        }"
    >
        <div
            class="l-row"
            @click="handleClickDragElement"
            :style="{
                height:'100%'
            }"
            :class="{
                'dotted':$store.state.is_show_dotted
            }"
        >
            <div
                v-for="(n,key) of Number(form.flex)"
                :key="key"
                class="l-col"
                :class="
                    [
                        'l-col-' + (24/Number(form.flex)),
                        'l-append-' + index + '-' + key,
                        {
                            'activeColor': $store.state.layout_active_class === 'l-append-' + index + '-' + key,
                            'l-bor-right':$store.state.is_show_dotted
                        }
                    ]
                "
                @click="handleClickCol(key)"
                :style="{
                    height:'100%'
                }"
            >
                <!--主界面：基础组件渲染盒子-->
                <temp-base-draggable
                    :className="'.l-append-' + index + '-' + key"
                    v-if="$route.params.type === '0'"
                >

                </temp-base-draggable>
                <!--表单界面：基础组件渲染盒子-->
                <temp-base-no-draggable
                    :className="'.l-append-' + index + '-' + key"
                    v-if="$route.params.type === '1'"
                >

                </temp-base-no-draggable>
            </div>
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
import TempBaseDraggable from '../../toolbar/BaseDraggable.vue'
import TempBaseNoDraggable from '../../toolbar/BaseNoDraggable.vue'
// @ts-ignore
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import source from '../../../ts/data_manage/source.ts'
export default {
    name: "LoyoutFlex",
    components:{
        VueDraggableResizable,
        TempBaseDraggable,
        TempBaseNoDraggable
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
        position: relative;
    }
    .l-col{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .l-col-24 {
        display: flex;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .l-col-12 {
        display: flex;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .l-col-8 {
        display: flex;
        flex: 0 0 33.33%;
        max-width: 33.33%;
    }
    .l-col-6 {
        display: flex;
        flex: 0 0 25%;
        max-width: 25%;
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
        //background: #FFFFFF;
        cursor: pointer;
    }
</style>
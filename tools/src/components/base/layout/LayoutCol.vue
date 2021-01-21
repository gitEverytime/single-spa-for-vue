<template>
    <div  class="l-row">
        <vue-draggable-resizable
            v-for="(n,key) of Number(form.flex)"
            @dragging="onDrag"
            @resizing="onResize"
            :h="Number(form.height)"
            :onDrag="onDragStartCallback"
            :min-height="34"
            :handles="[]"
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
        >
            <div
                :key="key"
                @click="handleClickCol(key)"
                class="l-col-box"
                :style="{
                    height:form.height + 'px',
                    width:'100%'
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
        </vue-draggable-resizable>
    </div>
</template>

<script>
// @ts-ignore
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import TempBaseDraggable from '../../toolbar/BaseDraggable.vue'
import TempBaseNoDraggable from '../../toolbar/BaseNoDraggable.vue'
export default {
    name: "LayoutCol",
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

        }
    },
    mounted() {
    },
    created() {
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
        },
        /**
         * 拖拽回调
         * @param x
         * @param y
         */
        onDrag(x, y) {
            let vm = this;
        },
        /**
         * 禁止拖拽
         * @param ev
         */
        onDragStartCallback(ev){
            return false;
        },
    }
}
</script>

<style scoped lang="scss">
    .l-row {
        display: flex;
        flex-flow: row wrap;
        position: relative;
        width: 100%;
    }
    .l-col,.l-col-box{
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
    .activeColor{
        border: #009dff solid 2px !important;
    }
</style>
<template>
    <div
        class="base-draggable"
        :style="{
            width:'100%'
        }"
    >
        <vue-draggable-resizable
            v-for="(form,index) in sources.filter(source => source.parentName === className)"
            :key="form.type + index"
            @dragging="onDrag(form)"
            @resizing="onResize(form)"
            @dragstop="onDragStop"
            @resizestop="onResizeStop"
            :h="Number(form.height)"
            :x="Number(form.left)"
            :y="Number(form.top)"
            :w="Number(form.width)"
            :min-height="34"
            :min-width="70"
            :parent="form.parentName"
            :isConflictCheck="true"
            :snap="true"
            :snapTolerance="10"
            :handles="form.handles"
            @refLineParams="getRefLineParams"
            :style="{
                zIndex:1000,
                position:'absolute'
            }"
        >
            <!-- 加载组件盒子-->
            <temp-load-base-element
                :form="form"
                :index="index"
            >
            </temp-load-base-element>
        <!--  辅助线   -->
        </vue-draggable-resizable>
        <span class="ref-line v-line"
              v-for="(item,index) in vLine"
              :key="'vLine' + index"
              v-show="item.display"
              :style="{ left: item.position, top: item.origin, height: item.lineLength}"
        />
        <span class="ref-line h-line"
              v-for="(item,index) in hLine"
              :key="'hLine' + index"
              v-show="item.display"
              :style="{ top: item.position, left: item.origin, width: item.lineLength}"
        />
    </div>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import source from '../../ts/data_manage/source.ts'
// 导入默认样式
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
import TempLoadBaseElement from '../../components/toolbar/LoadBaseElement.vue'
export default {
    name: "BaseRenderBox",
    components:{
        VueDraggableResizable,
        TempLoadBaseElement
    },
    props:{
        className:{
            type:String
        }
    },
    data(){
        let vm = this;
        return{
            sources:source.base_info,
            vLine: [],
            hLine: [],
            form:{}
        }
    },
    created(){

    },
    mounted(){

    },
    /**
     * 允许按键微调组件
     */
    updated () {
        let vm = this;
        document.onkeydown = function(event) {
            const e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && (e.keyCode === 87 || e.keyCode === 38)) {  // 按 w或up
                vm.form.top = Number(vm.form.top) - 1;
            }
            if (e && (e.keyCode === 83 || e.keyCode === 40)) {  // 按 s或down
                vm.form.top = Number(vm.form.top) + 1;
            }
            if (e && (e.keyCode === 65 || e.keyCode === 37)) {  // 按 a或left
                vm.form.left = Number(vm.form.left) - 1;
            }
            if (e && (e.keyCode === 68 || e.keyCode === 39)) {  // 按 d或right
                vm.form.left = Number(vm.form.left) + 1;
            }
        };
    },
    methods:{
        /**
         * 拖拽
         */
        onDrag(form){
            let vm = this;
            vm.form = form;
        },
        /**
         * 缩放
         */
        onResize(){
            let vm = this;
            vm.form = form;
        },
        /**
         * 缩放停止回调
         * @param x
         * @param y
         * @param width
         * @param height
         */
        onResizeStop(x, y, width, height) {
            let vm = this;
            vm.form.top = Number.parseInt(y);
            vm.form.left = Number.parseInt(x);
            vm.form.width = Number.parseInt(width);
            vm.form.height = Number.parseInt(height);
        },
        /**
         * 拖拽停止回调
         * @param x
         * @param y
         */
        onDragStop(x, y) {
            let vm = this;
            vm.form.top = Number.parseInt(y);
            vm.form.left = Number.parseInt(x);
        },
        /**
         * 辅助线回调事件
         * @param params
         */
        getRefLineParams (params) {
            let vm = this;
            const { vLine, hLine } = params
            vm.vLine = vLine;
            vm.hLine = hLine;
        },
    }
}
</script>

<style scoped lang="scss">
    .vdr {
        border: none;
    }
    .active{
        border: #009dff solid 1px;
    }
</style>
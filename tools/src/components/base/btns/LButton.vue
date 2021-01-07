<template>
    <vue-draggable-resizable
        v-if="!form.isHide"
        @dragging="onDrag"
        @resizing="onResize"
        :resizable="false"
        :h="33"
        :w="70"
        :x="Number(form.left)"
        :y="Number(form.top)"
        :min-height="34"
        :min-width="40"
        :parent="form.parentName"
        class="l_button l_handle_active"
        :class="'l_button' + index"
        :style="{
            Zindex:1000
        }"
    >
        <a-button
            @click="handleClickDragElement"
            @dblclick="handledbClickDragElement"
            :type="form.btnType || 'primary'"
            :disabled="form.isDisabled"
            class="l_btn"
            :style="{
                padding: form.padding || '0 15px'
            }"
        >
            <span
                :style="{
                    fontWeight: form.isTextBold ? 'bold' : '300',
                    fontStyle: form.isTextItalics ? 'italic' : 'normal',
                    textDecoration: form.isTextDeleteLine ? 'line-through' : form.isTextUnderLine ? 'underline' : 'none'
                }"
            >
                {{form.name}}
            </span>
        </a-button>
    </vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'

// 导入默认样式
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
import source from '../../../ts/data_manage/source.ts'
import tools_comp_source from "../../../ts/data_manage/tools_comp_source.ts";
export default {
    name: "LInput",
    components:{
        VueDraggableResizable
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
        let vm = this;
        return{
            sources:source.modal_info,
            obj:tools_comp_source.modal_scource
        }
    },
    created(){

    },
    mounted(){
        let vm = this;
        console.log(vm.form)
    },
    methods:{
        /**
         * 点击选中当前组件，回传数据给公共管理库，记录
         */
        handleClickDragElement(){
            let vm = this;
            vm.$store.commit('setCompBaseInfo',vm.form);
        },
        /**
         * 双击运行当前按钮绑定的交互
         */
        handledbClickDragElement(){
            let vm = this;
            const type = vm.form.interactiveType;
            /***
             * 按钮交互类型判断
             */
            switch (type) {
                case "insert":
                    /**
                     * 1，显示对应的弹窗
                     * 2，绑定操作的层
                     * @type {boolean}
                     */
                    vm.sources.filter(source => source.triggerElement === vm.form.alias)[0].visible = true;
                    vm.$store.commit('setOperateLayer','modal');
                    break;
            }
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
        }
    }
}
</script>

<style scoped lang="scss">
.l_button{
    cursor: pointer;
    position: relative;
}
.vdr {
    border: none;
}
.active{
    border: #009dff solid 1px;
}
</style>
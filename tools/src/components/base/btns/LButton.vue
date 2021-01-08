<template>
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
</template>

<script>
import source from '../../../ts/data_manage/source.ts'
import tools_comp_source from "../../../ts/data_manage/tools_comp_source.ts";
export default {
    name: "LInput",
    components:{
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
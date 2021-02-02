<template>
    <div class="l-title-box" @click="handleClickDragElement" @dblclick="handleDblClickElement">
        <span v-if="form.readonly">请输入标题</span>
        <input
            v-else
            v-model="form.value"
            placeholder="请输入标题"
            :readonly="form.readonly"
            @blur="handleFocusElement"
            :style="{
                fontFamily:form.fontFamily,
                fontSize:form.fontSize + 'px',
                fontWeight: form.isTextBold ? 'bold' : '400',
                fontStyle: form.isTextItalics ? 'italic' : 'normal',
                textDecoration: form.isTextDeleteLine ? 'line-through' : form.isTextUnderLine ? 'underline' : 'none'
            }"
        />
    </div>
</template>

<script>
import source from '@/ts/data_manage/source.ts'
export default {
    name: "LTitle",
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
        return{
            sources:source.base_info,
        }
    },
    created() {
    },
    mounted() {
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
         * 双击
         */
        handleDblClickElement(){
            let vm = this;
            vm.form.readonly = false;
        },
        /**
         * 失去焦点
         */
        handleFocusElement(){
            let vm = this;
            vm.form.readonly = true;
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .l-title-box{
        width: 100% ;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        input{
            outline: none;
            text-align: center;
            background: transparent;
            width: 100% ;
            height: 100%;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
        }
    }
</style>
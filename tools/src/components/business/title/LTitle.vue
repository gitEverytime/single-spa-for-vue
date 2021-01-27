<template>
    <div class="l-title-box" @click="handleClickDragElement" v-if="!sources.filter(source => source.parentName === form.parentName).length">
        <input
            v-model="form.value"
            placeholder="请输入标题"
            :readonly="form.readonly"
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
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .l-title-box{
        width: 100% ;
        height: 100%;
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
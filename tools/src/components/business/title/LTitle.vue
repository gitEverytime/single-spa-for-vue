<template>
    <div class="l-title-box" @click="handleClickDragElement">
        <input
            v-model="form.value"
            placeholder="请输入标题"
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
        input{
            outline: none;
            text-align: center;
            background: transparent;
            width: 100% ;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
        }
    }
</style>
<template>
    <div
        :style="{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        }"
    >
        <span
            :style="{
                width:'100px',
                fontSize:'12px',
                fontWeight: form.isTextBold ? 'bold' : '400',
                fontStyle: form.isTextItalics ? 'italic' : 'normal',
                textDecoration: form.isTextDeleteLine ? 'line-through' : form.isTextUnderLine ? 'underline' : 'none'
            }"
        >
            {{form.name}}
        </span>
        <a-switch
            @click="handleClickDragElement"
            checked-children="开"
            un-checked-children="关"
            v-model="form.value_bool"
        />
    </div>
</template>

<script>
export default {
    name: "LSelect",
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
            value: 1,
            radioStyle: {
                height: '30px',
                lineHeight: '30px',
            },
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
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

</style>
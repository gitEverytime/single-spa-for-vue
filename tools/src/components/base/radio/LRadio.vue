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
        <a-radio-group
            v-model="form.value"
            @change="onChange"
            @click="handleClickDragElement"
        >
            <a-radio
                :style="radioStyle"
                 v-for="item in form.options"
                 :value="item.value"
            >
                {{item.text}}
            </a-radio>
        </a-radio-group>
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
         * change事件
         * @param value
         */
        onChange(e) {
            console.log('radio checked', e.target.value);
        },
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
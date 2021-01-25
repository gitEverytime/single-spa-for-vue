<template>
    <div
        :style="{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        }"
    >
        <span
            v-if="form.parentName.includes('append')"
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
        <a-select
            v-model="form.value || ''"
            @change="handleChange"
            :disabled="form.disabled"
            :getPopupContainer="
                triggerNode => {
                    return triggerNode.parentNode || document.body;
                }
            "
            :style="{
                width: '100%'
            }"
            @click="handleClickDragElement"
        >
            <a-select-option
                v-for="item in form.options"
                :value="item.value"
            >
                {{item.text}}
            </a-select-option>
        </a-select>
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

        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        /**
         * change事件
         * @param value
         */
        handleChange(value) {
            console.log(`selected ${value}`);
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
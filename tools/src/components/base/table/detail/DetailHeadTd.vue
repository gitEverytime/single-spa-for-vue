<template>
    <input
        v-model="data.title"
        :placeholder="t_key === 0 ? '表头' : ''"
    />
</template>

<script>
export default {
    name: "DetailHeadTd",
    props:{
        data:{
            type:Object
        },
        index:{
            type:Number
        },
        t_key:{
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

    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    input{
        outline: none;
        border: none;
        text-align: center;
        background: transparent;
        width: 100% ;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        height: 100%;
    }
</style>
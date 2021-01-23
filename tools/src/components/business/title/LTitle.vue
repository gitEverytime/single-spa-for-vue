<template>
    <div class="l-title-box">
        <input v-model="form.value" placeholder="请输入标题" />
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
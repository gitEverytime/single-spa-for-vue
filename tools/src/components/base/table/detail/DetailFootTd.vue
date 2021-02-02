<template>
    <div style="width:100%; height:100%; position:relative" class="l-detail-foot-td fileDiv">
        <input
            v-if="data.show"
            v-model="data.title"
            :placeholder="t_key === 0 ? '表尾' : ''"
        />
        <span v-if="!data.show && t_key === 0">表尾</span>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "DetailFootTd",
    props:{
        data:{
            type:Object
        },
        index:{
            type:Number
        },
        t_key:{
            type:Number
        },
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
    .seled{border:1px solid red;background-color:#D6DFF7;}
    .l-detail-foot-td{
        display: flex;flex-direction: row;
        justify-content: center;
        align-items: center;
    }
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
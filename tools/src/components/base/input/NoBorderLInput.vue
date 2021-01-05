<template>
    <div class="l_input_no_border"
    >
        <span
            v-if="title"
            :style="{
                color:$store.state.text_color,
                fontSize:'12px',
                width:'50px',
                textAlign:'left'
            }"
        >
            {{title}}
        </span>
        <input
            v-model="obj[l_key]"
            :style="{
                'width':width + 'px'
            }"
        >
    </div>
</template>

<script>
export default {
    name: "NoBorderInput",
    props:{
        obj:{
            type: Object
        },
        width:{
            type: String
        },
        title:{
            type: String
        },
        l_key:{
            type: String
        }
    },
    components:{
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
    .l_input_no_border{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        input{
            border: 0;
            outline: 0;
            background: none;
            color: #ffffff;
            font-size: 12px;
            &:focus {
                border-bottom: #009dff solid 1px;
                overflow: visible;
                overflow: initial;
                text-overflow: clip;
                white-space: normal;
            }
        }
    }
</style>
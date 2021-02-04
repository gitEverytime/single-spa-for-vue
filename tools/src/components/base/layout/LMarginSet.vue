<template>
    <div class="l_mar_box">
        <span
            :style="{
                color:$store.state.text_color
            }"
        >
            外边距：
        </span>
        <a-input-number
            id="inputNumber"
            v-model="margin"
            size="small"
            :min="1"
            :max="10"
            :style="{
                width:'60px'
            }"
            @change="onChange"
        />
    </div>
</template>

<script>
export default {
    name: "LPaddingSet",
    components:{

    },
    props:{
        obj:{
            type:Object
        }
    },
    data(){
        return{
            margin:''
        }
    },
    mounted() {
    },
    created() {
    },
    methods:{
        onChange(){
            let vm = this;
            vm.obj.margin = vm.margin
        }
    }
}
</script>

<style scoped lang="scss">
.l_mar_box{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-right: 10px;
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
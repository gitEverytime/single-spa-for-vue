<template>
    <div class="l_pad_box">
        <span
            :style="{
                color:$store.state.text_color
            }"
        >内边距：</span>
        <a-input-number
            id="inputNumber"
            v-model="padding"
            size="small"
            :min="1"
            :max="30"
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
            padding:''
        }
    },
    mounted() {
    },
    created() {
    },
    computed:{
        pad(){
            return this.obj.padding
        }
    },
    watch:{
        pad(data){
            let vm = this;
            if(data) {
                vm.padding = data;
            }
        }
    },
    methods:{
        onChange(){
            let vm = this;
            vm.obj.padding = vm.padding
        }
    }
}
</script>

<style scoped lang="scss">
    .l_pad_box{
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
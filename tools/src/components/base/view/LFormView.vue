<template>
    <div class="l_input_no_border">
        <span
           :style="{
            color:$store.state.text_color,
            fontSize:'12px',
            width:'80px',
            textAlign:'left'
        }"
        >
            视图宽度：
        </span>
        <input
            v-model="width"
            :style="{
                width:'50px'
            }"
            @blur="handleFocus"
        >
        <label :style="{color:$store.state.text_color,}">px</label>
    </div>
</template>

<script>
import CompNoBorderLInput from "@/components/base/input/NoBorderLInput";
import source from '../../../ts/data_manage/source.ts'
import {message} from "ant-design-vue";
export default {
    name: "LFormView",
    components:{
        CompNoBorderLInput,
    },
    props:{
        obj:{
            type:Object
        }
    },
    data(){
        return{
            width:'840',
            form_info:source.form_info
        }
    },
    computed:{

    },
    mounted() {
    },
    created() {
    },
    methods:{
        handleFocus(){
            let vm = this;
            if(vm.width <375 || vm.width >2000) {
                message.warning({
                    content:'输入的数值介于375~2000之间！',
                    getContainer:'.main-project'
                });
                return
            }
            vm.form_info.width = vm.width;
        }
    }
}
</script>

<style scoped lang="scss">
.l_input_no_border{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
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
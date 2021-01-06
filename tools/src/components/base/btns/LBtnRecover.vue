<template>
    <div class="l-btn-box">
        <span :style="{
            color:$store.state.text_color
        }"> 按钮类型：</span>
        <a-select
            :getPopupContainer="
                triggerNode => {
                    return triggerNode.parentNode || document.body;
                }
            "
            size="small"
            v-model:value="obj.btnType"
            ref="select"
        >
            <a-select-option
                v-for="(item,index) in radios"
                :key="index"
                :value="item.value"
                :style="{
                    backgroundColor:'transparent'
                }"
            >
                {{item.name}}
            </a-select-option>
        </a-select>
    </div>
</template>

<script lang="ts">
export default {
    name: "GridLayout",
    props:{
        obj:{
            type:Object
        }
    },
    data(){
        return{
            radios:[
                {
                    name:'普通按钮',
                    value:'primary'
                },
                {
                    name:'危险按钮',
                    value:'danger'
                },
                {
                    name:'纯文字按钮',
                    value:'link'
                },
                {
                    name:'虚线按钮',
                    value:'dashed'
                }
            ]
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
.l-btn-box{
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #323e52
}
.l-active-radio{
    color: #009dff !important;
}
</style>
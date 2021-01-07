<template>
    <div class="l-btn-box">
        <span :style="{
            color:$store.state.text_color
        }"> 按钮功能：</span>
        <a-select
            :getPopupContainer="
                triggerNode => {
                    return triggerNode.parentNode || document.body;
                }
            "
            @select="handleSelect"
            size="small"
            v-model:value="obj.interactiveType"
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
import source from '../../../ts/data_manage/source.ts'
import tools_comp_source from "../../../ts/data_manage/tools_comp_source.ts";
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
                    name:'新增',
                    value:'insert'
                },
                {
                    name:'删除',
                    value:'delete'
                },
                {
                    name:'修改',
                    value:'update'
                },
                {
                    name:'查询',
                    value:'query'
                },
                {
                    name:'无功能',
                    value:'no_function'
                },
            ],
            sources:source.modal_info,
            modal:tools_comp_source.modal_scource
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        /**
         *
         */
        handleSelect(data){
            let vm = this;
            let obj = JSON.parse(JSON.stringify(vm.modal))
            switch (data) {
                case 'insert':
                    /**
                     * 1, 绑定触发元素的别名
                     * 2，弹窗基本信息数据源去重push
                     */
                    obj['title'] = `Modal${vm.sources.length}`;
                    obj['triggerElement'] = vm.obj.alias;
                    if(!vm.sources.filter(source => source.triggerElement === vm.obj.alias).length) vm.$set(vm.sources,vm.sources.length, obj);
                    break;
            }
        }
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
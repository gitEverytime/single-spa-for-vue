<template>
    <div id="sortable">
        <div
            v-for="(form,index) in sources"
            :key="'layout' + index"
            :id="index"
            class="ui-state-default"
        >
            <!--            栅格布局-->
            <comp-layout-flex
                v-if="form.type === 'l_flex' && operate_layer === form.operateLayer"
                :form="form"
                :index="index"
            >
            </comp-layout-flex>
            <!--            明细表布局-->
            <comp-detail-table
                v-if="form.type === 'l_detail_table' && operate_layer === form.operateLayer"
                :form="form"
                :index="index"
            >
            </comp-detail-table>
            <!--            普通表布局-->
            <comp-custom-table
                v-if="form.type === 'l_table' && operate_layer === form.operateLayer"
                :form="form"
                :index="index"
            ></comp-custom-table>
        </div>
    </div>
</template>
<script>
import source from '../../ts/data_manage/source.ts';
import tools_comp_source from "@/ts/data_manage/tools_comp_source";
import CompLayoutFlex from '../../components/base/layout/LayoutFlex.vue';
import CompDetailTable from '../base/table/detail/LDetailTable.vue';
import CompCustomTable from '../base/table/table/LCustomTable.vue'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-dist/jquery-ui.min.css';
export default {
    name: "LayoutRenderBox",
    components:{
        CompLayoutFlex,
        CompDetailTable,
        CompCustomTable
    },
    props:{
        operate_layer:{
            type:String
        }
    },
    data(){
        let vm = this;
        return{
            sources:source.layout_info,
            element_source:source.base_info,
            tools_comp_source:tools_comp_source
        }
    },
    created(){
        let vm = this;
        /**
         * 默认创建标题布局,表单组件
         * @type {any}
         */
        let creatime = Date.parse(new Date());
        //布局
        let obj = JSON.parse(JSON.stringify(vm.tools_comp_source.layout_scource));
        //表单组件
        let element = JSON.parse(JSON.stringify(vm.tools_comp_source.base_scource));
        obj.flex = 1;
        obj.time = creatime;
        obj.type = 'l_flex';
        obj.height = '50';
        obj.children.push({
            width:'',
            time:creatime + 1
        });
        element.type = 'l_title';
        element.parentName = `.l-append-${creatime}-${creatime + 1}`;
        //push
        vm.$set(vm.sources,vm.sources.length,obj);
        vm.$set(vm.element_source,vm.element_source.length,element);
    },
    mounted(){
        let vm = this;
        vm.$nextTick(() => {
            $( "#sortable" ).sortable({
                stop: function (event,ui) {
                    //获取id的排序
                    let sortedIDs = $( "#sortable" ).sortable( "toArray" );
                    source.change_layout_info = vm.sortArr(sortedIDs,vm.sources);
                }
            });
            $( "#sortable" ).disableSelection();
        })
    },
    methods:{
        /**
         * 按照给定下标给数组排序
         * @param ids
         * @param data
         * @returns {[]}
         */
        sortArr(ids,data){
            let arr = [];
            ids.forEach((id) => {
                let item = data.filter((item,index) => index === Number(id));
                if(item.length) arr.push(item[0]);
            })
            return arr
        }
    }
}
</script>

<style scoped lang="scss">
    .ui-state-default{
        background: transparent;
        border: 0;
    }
</style>
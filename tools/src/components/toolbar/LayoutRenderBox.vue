<template>
    <div>
        <div
            v-for="(form,index) in sources"
            :key="'layout' + index"
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
        </div>
    </div>
</template>
<script>
import source from '../../ts/data_manage/source.ts';
import CompLayoutFlex from '../../components/base/layout/LayoutFlex.vue';
import CompDetailTable from '../../components/base/table/DetailTable.vue';
export default {
    name: "LayoutRenderBox",
    components:{
        CompLayoutFlex,
        CompDetailTable
    },
    props:{
        operate_layer:{
            type:String
        }
    },
    data(){
        let vm = this;
        return{
            sources:source.layout_info
        }
    },
    created(){

    },
    mounted(){
        console.log(this.sources)
    },
    methods:{
    }
}
</script>

<style scoped>

</style>
<template>
    <a-collapse v-model="activeKey" :bordered="false">
        <a-collapse-panel
            v-for="(comp,index) in left_layout"
            :key="String(index+1)"
            :header="comp.name"
            :style="{
                backgroundColor: $store.state.light_color,
                borderBottomColor: $store.state.deep_color,
            }"
        >
            <!--            组件布局-->
            <ul v-if="comp.type === 'comp'">
                <li v-for="(item,index) in comp.children">
                    <temp-comp-layout
                        :item="item"
                        :index="index"
                    >

                    </temp-comp-layout>
                </li>
            </ul>
            <!--            Table布局-->
            <ul v-if="comp.type === 'table'">
                <li v-for="(item,index) in comp.children">
                    <temp-table-layout
                        :item="item"
                        :index="index"
                    >
                    </temp-table-layout>
                </li>
            </ul>
            <!--            明细表布局-->
            <ul v-if="comp.type === 'detail'">
                <li v-for="(item,index) in comp.children">
                    <temp-detail-layout
                        :item="item"
                        :index="index"
                    >
                    </temp-detail-layout>
                </li>
            </ul>
        </a-collapse-panel>
    </a-collapse>
</template>

<script>
import data from '../../../ts/data_manage/layout_data.ts'
import TempCompLayout from './layout/CompLayout.vue'
import TempDetailLayout from './layout/DetailLayout.vue'
import TempTableLayout from './layout/TableLayout.vue'
export default {
    name: "Layout",
    components:{
        TempCompLayout,
        TempDetailLayout,
        TempTableLayout
    },
    data(){
        return{
            activeKey: ['1','2','3','4'],
            text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
            left_layout:data.left_layout
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

<style scoped>

</style>
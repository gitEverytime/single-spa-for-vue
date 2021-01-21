<template>
    <a-collapse v-model="activeKey" :bordered="false">
        <a-collapse-panel
            v-for="(comp,index) in left_components"
            :key="String(index+1)"
            :header="comp.name"
            :style="{
                    backgroundColor: $store.state.light_color,
                    borderBottomColor: $store.state.deep_color,
                }"
        >
            <comp :type="comp.type" :datas="comp.children"></comp>
        </a-collapse-panel>
    </a-collapse>
</template>

<script>
import Comp from "../../../components/toolbar/Comp";
import data from '../../../ts/data_manage/tools_data.ts'
export default {
    name: "DataArea",
    components:{
        Comp
    },
    data(){
        return{
            activeKey: ['1','2','3','4'],
            text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
            left_components:data.left_components
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{

    }
}
</script>

<style scoped>

</style>
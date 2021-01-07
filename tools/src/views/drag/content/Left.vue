<template>
    <a-drawer
        title=""
        placement="left"
        wrapClassName="l-left-drawer"
        :closable="false"
        :visible="$store.state.open_status"
        :mask="false"
        width="240"
        :get-container="false"
        :wrap-style="{ position: 'absolute',zIndex:9999 }"
        :drawer-style="{
            backgroundColor:$store.state.deep_color
        }"
        :body-style="{
            padding:'0'
        }"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
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
    </a-drawer>
</template>

<script>
import data from '../../../ts/data_manage/tools_data.ts'
import Comp from "../../../components/toolbar/Comp";
export default {
    name: "Left",
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
    watch: {
        activeKey(key) {
        },
    },
    created() {
    },
    mounted() {
    },
    methods:{
        afterVisibleChange(val) {

        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
    },
    beforeDestroy() {
    }
}
</script>

<style lang="scss" scoped>

</style>
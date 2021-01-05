<template>
    <a-drawer
        title=""
        placement="right"
        wrapClassName="l-left-drawer"
        :closable="false"
        :visible="$store.state.open_status"
        :mask="false"
        width="240"
        :get-container="false"
        :wrap-style="{ position: 'absolute' }"
        :drawer-style="{
            backgroundColor:$store.state.deep_color
        }"
        :body-style="{
            padding:'0'
        }"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
        <temp-right-tab></temp-right-tab>
    </a-drawer>
</template>

<script>
import TempRightTab from '../right/RightTab.vue'
export default {
    name: "Right",
    components:{
        TempRightTab
    },
    data(){
        return{
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        afterVisibleChange(val) {
            console.log('visible', val);
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

<style scoped>

</style>
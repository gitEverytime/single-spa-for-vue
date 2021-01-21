<template>
    <div>
        <a-tabs
            @change="callback"
            size="small"
            :tabBarStyle="{
                borderBottom:'1px solid #323e52',
                color:$store.state.text_color,
                fontSize:'12px',
                margin:'0'
            }"
        >
            <a-tab-pane
                key="1"
                tab="布局"
            >
                <temp-layout></temp-layout>
            </a-tab-pane>
            <a-tab-pane
                key="2"
                tab="数据域"
                force-render>
                <temp-data-area></temp-data-area>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script lang="ts">
import TempLayout from './Layout.vue'
import TempDataArea from './DataArea.vue'
export default {
    components:{
        TempLayout,
        TempDataArea
    },
    data() {
        return {};
    },
    computed:{
        comp_base_info(){
            let vm = this;
            return vm.$store.state.comp_base_info;
        }
    },
    watch:{

    },
    methods: {
        callback(key) {
            console.log(key);
        },
    },
}
</script>

<style scoped lang="scss">
.ant-tabs-tab{
    padding: 4px 10px;
}
</style>
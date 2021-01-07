<template>
    <div>
        <a-tabs
            @change="callback"
            size="small"
            :tabBarStyle="{
                borderBottom:'1px solid #323e52',
                color:$store.state.text_color,
                fontSize:'12px'
            }"
        >
            <a-tab-pane
                key="1"
                tab="属性"
            >
                <temp-right-base-info :obj="comp_base_info"></temp-right-base-info>
            </a-tab-pane>
            <a-tab-pane key="2" tab="交互" force-render>
                <div style="height: 250px">
                    <temp-base-interaction :obj="comp_base_info"></temp-base-interaction>
                </div>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import TempRightBaseInfo from './RightBaseInfo.vue'
import TempBaseInteraction from '../../../components/base/interactive/BaseInteraction.vue'
export default {
    components:{
        TempRightBaseInfo,
        TempBaseInteraction
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
<template>
    <div class="rigth-base-info">
        <div class="title">
            <comp-no-border-l-input :obj="obj" width="120" title="" l_key="name" ></comp-no-border-l-input>
            <p>
                <comp-hide-icon :obj="obj"></comp-hide-icon>
                <comp-disabled-icon :obj="obj"></comp-disabled-icon>
                <comp-lock-icon :obj="obj"></comp-lock-icon>
            </p>
        </div>
        <div class="l_base_1">
            <div class="l_base_1_left">
                <comp-no-border-l-input :obj="obj" width="50" title="宽度(W)" l_key="width"></comp-no-border-l-input>
                <p style="height: 20px"></p>
                <comp-no-border-l-input :obj="obj" width="50" title="高度(H)" l_key="height"></comp-no-border-l-input>
                <div class="l_ratio">
                </div>
            </div>
            <div class="l_base_1_right">
                <comp-no-border-l-input :obj="obj" width="50" title="水平(X)" l_key="left"></comp-no-border-l-input>
                <p style="height: 20px"></p>
                <comp-no-border-l-input :obj="obj" width="50" title="垂直(Y)" l_key="top"></comp-no-border-l-input>
                <div class="l_ratio">
                </div>
            </div>
        </div>
        <a-collapse v-model="activeKey" :bordered="false">
            <a-collapse-panel
                key="1"
                header="文本"
                :style="{
                    backgroundColor: $store.state.light_color,
                    borderBottomColor: $store.state.deep_color,
                }"
            >
                <div
                    class="l_base_2"
                    :style="{
                        padding:'10px',
                        textAlign:'left'
                    }"
                >
                    <span
                        :style="{
                            color:$store.state.text_color,
                        }"
                    >字体样式:</span>
                    <comp-blod-icon :obj="obj"></comp-blod-icon>
                    <comp-italics-icon :obj="obj"></comp-italics-icon>
                    <comp-under-line-icon :obj="obj"></comp-under-line-icon>
                    <comp-delete-line-icon :obj="obj"></comp-delete-line-icon>
                </div>
            </a-collapse-panel>
            <a-collapse-panel
                key="2"
                header="外形"
                :style="{
                    backgroundColor: $store.state.light_color,
                    borderBottomColor: $store.state.deep_color,
                }"
            >
               <div style="min-height: 250px">
                   <comp-l-btn-recover :obj="obj" v-if="obj.type === 'l_btn'"></comp-l-btn-recover>
               </div>
            </a-collapse-panel>
            <a-collapse-panel
                key="3"
                header="栅格定义"
                :style="{
                    backgroundColor: $store.state.light_color,
                    borderBottomColor: $store.state.deep_color,
                }"
            >
                <comp-grid-layout :obj="$store.state.comp_layout_info"></comp-grid-layout>
            </a-collapse-panel>
            <a-collapse-panel
                key="4"
                header="弹出样式"
                :style="{
                    backgroundColor: $store.state.light_color,
                    borderBottomColor: $store.state.deep_color,
                }"
            >
                <comp-l-modal-info></comp-l-modal-info>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<script>
import CompNoBorderLInput from '../../../components/base/input/NoBorderLInput.vue'
import CompHideIcon from '../../../components/base/icons/LHideIcon.vue'
import CompDisabledIcon from '../../../components/base/icons/LDisabledIcon.vue'
import CompLockIcon from '../../../components/base/icons/LockIcon.vue'
import CompBlodIcon from '../../../components/base/icons/LBlodIcon.vue'
import CompItalicsIcon from '../../../components/base/icons/LItalicsIcon.vue'
import CompUnderLineIcon from '../../../components/base/icons/LUnderLineIcon.vue'
import CompDeleteLineIcon from '../../../components/base/icons/LDeleteLineIcon.vue'
import CompGridLayout from '../../../components/base/layout/GridLayout.vue'
import CompLBtnRecover from '../../../components/base/btns/LBtnRecover.vue'
import CompLModalInfo from '../../../components/base/modal/LModalInfo.vue'
export default {
    name: "RightBaseInfo",
    props:{
        obj:{
            type:Object
        }
    },
    components:{
        CompNoBorderLInput,
        CompHideIcon,
        CompDisabledIcon,
        CompLockIcon,
        CompBlodIcon,
        CompItalicsIcon,
        CompUnderLineIcon,
        CompDeleteLineIcon,
        CompGridLayout,
        CompLBtnRecover,
        CompLModalInfo
    },
    data(){
        return{
            activeKey: ['1','2','3','4'],
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

<style scoped lang="scss">
    .rigth-base-info{
        .title{
            padding: 0px 12px 10px;
            border-bottom: 1px solid #323e52;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            p{
                display: flex;
                i{
                    margin-right: 10px;
                    cursor: pointer;
                }
                .default_icon{
                    &:hover{
                        color: #FFFFFF !important;
                    }
                }
            }
        }
        .l_base_1{
            padding: 10px 12px;
            border-bottom: 1px solid #323e52;
            display: flex;
            flex-direction: row;
            .l_base_1_left,.l_base_1_right{
                width: 50%;
                position: relative;
                .l_ratio{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 10px;
                    height: 40px;
                    border-top: 1px solid #42516c;
                    border-right: 1px solid #42516c;
                    border-bottom: 1px solid #42516c;
                }
            }
        }
    }
</style>
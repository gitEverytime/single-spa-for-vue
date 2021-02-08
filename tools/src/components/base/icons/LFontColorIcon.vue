<template>
    <div class="l-font-color-icon-box">
        <a-tooltip
            placement="bottomRight"
            :getPopupContainer="
                    triggerNode => {
                        return triggerNode.parentNode || document.body;
                    }
                "
        >
            <template slot="title">
                颜色选择器
            </template>
            <a-icon
                :class="{
                    'blueColor':showPicker
                }"
                @click="showPicker = !showPicker"
                type="font-colors"
                :style="{
                    'color':obj.hasOwnProperty('color') ? $store.state.text_color : $store.state.disabled_color,
                    fontSize:'16px',
                    cursor:'pointer',
                }"
            />
        </a-tooltip>
        <div class="l-color-picker-wrap" v-if="showPicker">
            <comp-l-color-picker :obj="obj"></comp-l-color-picker>
        </div>
        <div class="mask" v-if="!obj.hasOwnProperty('color')"></div>
    </div>
</template>

<script>
import CompLColorPicker from '../color_picker/LColorPicker.vue'
export default {
    name: "HideBtn",
    props:{
        obj:{
            type:Object
        }
    },
    components:{
        CompLColorPicker
    },
    data(){
        return{
            showPicker:false
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
    .blueColor{
        color: #009dff !important;
    }
    .l-font-color-icon-box{
        position: relative;
        .l-color-picker-wrap{
            position: absolute;
            top: 10px;

        }
        .mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            cursor: not-allowed;
        }
    }
    i{
        margin-right: 10px;
        cursor: pointer;
    }
    .default_icon{
        &:hover{
            color: #FFFFFF !important;
        }
    }
</style>

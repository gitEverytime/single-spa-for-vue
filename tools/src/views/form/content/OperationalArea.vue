<template>
    <div
        class="l-operational-area"
        :class="{
            'square':$store.state.is_show_square
        }"
    >
        <!--        布局组件渲染盒子-->
        <temp-layout-render-box operate_layer="main"></temp-layout-render-box>
    </div>
</template>

<script lang="ts">
import TempLayoutRenderBox from '../../../components/toolbar/LayoutRenderBox.vue'
import TempDetailRenderBox from '../../../components/toolbar/DetailRenderBox.vue'
export default {
    name: "OperationalArea",
    components:{
        TempLayoutRenderBox,
        TempDetailRenderBox
    },
    data(){
        return {

        }
    },
    mounted() {
    },
    created() {
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
    .l-operational-area{
        width: 840px;
        height: 700px;
        background: #FFFFFF;
        padding: 20px;
        -moz-box-shadow:-1px 10px 12px #0A0A0A; -webkit-box-shadow:-1px 10px 12px #0A0A0A; box-shadow:-1px 10px 12px #0A0A0A;
    }
    .square{
        background-image: linear-gradient(90deg, rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%),linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
        background-size: 10px 10px;
    }
</style>
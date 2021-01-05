<template>
    <div
        class="l_drag_cont"
        :style="{
            margin:$store.state.open_status ? '0 240px' : '0',
        }"
    >
        <!--布局组件渲染盒子-->
        <temp-layout-render-box></temp-layout-render-box>
    </div>
</template>

<script lang="ts">
import TempLayoutRenderBox from '../../../components/toolbar/LayoutRenderBox.vue'
export default {
    components:{
        TempLayoutRenderBox
    },
    name: "Cont"
    }
</script>

<style scoped lang="scss">
    .l_drag_cont{
        height: 100%;
        position: relative;
        background-image: linear-gradient(90deg, rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%),linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
        background-size: 10px 10px;
    }
</style>
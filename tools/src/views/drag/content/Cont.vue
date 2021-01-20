<template>
    <div
        class="l_drag_cont"
        :class="{
            'square':$store.state.is_show_square
        }"
        :style="{
            margin:$store.state.open_status ? '0 240px' : '0',
            padding:'20px'
        }"
    >
        <!--布局组件渲染盒子-->
        <temp-layout-render-box operate_layer="main"></temp-layout-render-box>
        <!-- 弹出层-->
        <comp-l-modal></comp-l-modal>
    </div>
</template>

<script lang="ts">
import TempLayoutRenderBox from '../../../components/toolbar/LayoutRenderBox.vue'
import CompLModal from '../../../components/base/modal/LModal.vue'
export default {
    components:{
        TempLayoutRenderBox,
        CompLModal
    },
    name: "Cont"
}
</script>

<style scoped lang="scss">
.l_drag_cont{
    height: 100%;
    position: relative;
    overflow: hidden;
}
.square{
    background-image: linear-gradient(90deg, rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%),linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 10px 10px;
}
</style>
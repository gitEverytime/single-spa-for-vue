<template>
    <div
        class="l_drag_cont"
        :class="{
            'square':$store.state.is_show_square
        }"
        :style="{
            margin:$store.state.open_status ? '0 240px' : '0',
            backgroundColor:$store.state.deep_color,
            padding:'20px'
        }"
    >
        <!--        可操作区域-->
        <temp-operarion-area></temp-operarion-area>
    </div>
</template>

<script lang="ts">
import TempOperarionArea from './OperationalArea.vue'
export default {
    components:{
        TempOperarionArea
    },
    name: "Cont"
}
</script>

<style scoped lang="scss">
.l_drag_cont{
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
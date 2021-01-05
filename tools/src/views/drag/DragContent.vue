<template>
    <div class="l-drag-content" id="toolsContent">
        <!-- 左半区-->
        <temp-content-left></temp-content-left>
        <!-- 中间区域-->
        <temp-content-cont></temp-content-cont>
        <!-- 右半区-->
        <temp-content-right></temp-content-right>
    </div>
</template>

<script>
import TempContentLeft from './content/Left.vue'
import TempContentRight from './content/Right.vue'
import TempContentCont from './content/Cont.vue'
export default {
    name: "DragContent",
    components:{
        TempContentLeft,
        TempContentRight,
        TempContentCont
    },
    data() {
        return {

        }
    },
    created() {
    },
    mounted() {
    },
    methods: {

    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .l-drag-content{
        height: 100%;
        margin-bottom: -40px;
        position: relative;
        overflow: hidden;
    }
</style>
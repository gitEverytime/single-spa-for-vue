<template>
    <div
        class="l-drag-head"
        :style="{
            width:'100%',
            height:'40px',
            background:$store.state.light_color
        }"
    >
        <!--        左边-->
        <comp-head-left></comp-head-left>
        <!--        中间-->
        <comp-head-cont></comp-head-cont>
        <!--        右边-->
        <comp-head-right></comp-head-right>
    </div>
</template>

<script lang="ts">
import CompHeadLeft from '../../components/toolbar/head/HeadLeft.vue';
import CompHeadRight from '../../components/toolbar/head/HeadRight.vue';
import CompHeadCont from '../../components/toolbar/head/HeadCont.vue';
export default {
    name: "DragHead",
    components:{
        CompHeadLeft,
        CompHeadRight,
        CompHeadCont
    },
    data() {
        return {
            fullscreen:false
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
    .l-drag-head{
        border-bottom: 1px solid #202735;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding:0 12px;
        position: relative;
        z-index: 9999;
    }
</style>
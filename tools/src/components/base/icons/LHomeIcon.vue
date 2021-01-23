<template>
    <!-- 全屏-->
    <a-tooltip
        placement="bottomRight"
        :getPopupContainer="
            triggerNode => {
                return triggerNode.parentNode || document.body;
            }
        "
    >
        <template slot="title">
            返回首页
        </template>
        <a-icon
            type="home"
            :style="{
                color: '#ffffff',
                fontSize:'18px',
                cursor: 'pointer',
                marginRight:'12px'
            }"
        />
    </a-tooltip>
</template>

<script>
export default {
    name: "LHomeIcon"
}
</script>

<style scoped>

</style>
<template>
    <a-tooltip
        placement="bottomRight"
        :getPopupContainer="
            triggerNode => {
                return triggerNode.parentNode || document.body;
            }
        "
    >
        <template slot="title">
            {{$store.state.is_show_dotted ? '隐藏虚线' : '显示虚线'}}
        </template>
        <a-icon
            type="border-inner"
            v-if="$store.state.is_show_dotted"
            @click="$store.commit('setIsShowDotted',false)"
            :style="{
                color: '#ffffff',
                fontSize:'18px',
                cursor: 'pointer',
                marginRight:'12px'
            }"
        />
        <a-icon
            type="border-outer"
            v-if="!$store.state.is_show_dotted"
            @click="$store.commit('setIsShowDotted',true)"
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
    name: "LDottedIcon"
}
</script>

<style scoped>

</style>
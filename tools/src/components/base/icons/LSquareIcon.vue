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
            {{$store.state.is_show_square ? '隐藏底纹' : '显示底纹'}}
        </template>
        <a-icon
            type="border-inner"
            v-if="$store.state.is_show_square"
            @click="$store.commit('setIsShowSquare',false)"
            :style="{
                        color: '#ffffff',
                        fontSize:'18px',
                        cursor: 'pointer',
                        marginRight:'12px'
                    }"
        />
        <a-icon
            type="border-outer"
            v-if="!$store.state.is_show_square"
            @click="$store.commit('setIsShowSquare',true)"
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
    name: "LSquareIcon"
}
</script>

<style scoped>

</style>
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
            收起/展开左右侧边
        </template>
        <a-icon
            v-if="!$store.state.open_status"
            @click="handleClickOpen"
            type="fullscreen"
            :style="{
                color: '#ffffff',
                fontSize:'18px',
                cursor: 'pointer'
            }"
        />
        <a-icon
            v-else
            @click="handleClickOpen"
            type="fullscreen-exit"
            :style="{
                color: '#ffffff',
                fontSize:'18px',
                cursor: 'pointer'
            }"
        />
    </a-tooltip>
</template>

<script>
export default {
    name: "LOpenIcon",
    components:{

    },
    methods:{
        handleClickOpen(){
            let vm = this;
            // @ts-ignore
            vm.$store.commit('setOpenStatus',!vm.$store.state.open_status);
        },
    }
}
</script>

<style scoped>

</style>
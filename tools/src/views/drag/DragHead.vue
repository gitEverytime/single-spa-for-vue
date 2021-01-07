<template>
    <div
        class="l-drag-head"
        :style="{
            width:'100%',
            height:'40px',
            background:$store.state.light_color
        }"
    >
        <div class="l-drag-head-left">
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
        </div>
        <div class="l-drag-head-right">
            <a-tooltip
                placement="bottomRight"
                :getPopupContainer="
                    triggerNode => {
                        return triggerNode.parentNode || document.body;
                    }
                "
            >
                <template slot="title">
                    全屏(Ctrl+F11)
                </template>
                <a-icon
                    type="arrows-alt"
                    :style="{
                        color: '#ffffff',
                        fontSize:'18px',
                        cursor: 'pointer',
                        marginRight:'12px'
                    }"
                />
            </a-tooltip>
            <a-tooltip
                placement="bottomRight"
                :getPopupContainer="
                    triggerNode => {
                        return triggerNode.parentNode || document.body;
                    }
                "
            >
                <template slot="title">
                    全屏(Ctrl+F11)
                </template>
                <a-icon
                    type="arrows-alt"
                    :style="{
                        color: '#ffffff',
                        fontSize:'18px',
                        cursor: 'pointer',
                        marginRight:'12px'
                    }"
                />
            </a-tooltip>
            <!--收起左侧/右侧-->
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
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "DragHead",
    components:{

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
        handleClickOpen(){
            let vm = this;
            vm.$store.commit('setOpenStatus',!vm.$store.state.open_status);
        }
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
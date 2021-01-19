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
                    v-if="!fullscreen"
                    @click="handleFullScreen"
                    :style="{
                        color: '#ffffff',
                        fontSize:'18px',
                        cursor: 'pointer',
                        marginRight:'12px'
                    }"
                />
                <a-icon
                    type="shrink"
                    @click="handleFullScreen"
                    v-if="fullscreen"
                    :style="{
                        color: '#ffffff',
                        fontSize:'18px',
                        cursor: 'pointer',
                        marginRight:'12px'
                    }"
                />
            </a-tooltip>
<!--            <a-icon type="shrink" />-->
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
            fullscreen:false
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        handleClickOpen(){
            let vm = this;
            // @ts-ignore
            vm.$store.commit('setOpenStatus',!vm.$store.state.open_status);
        },
        /**
         * 全屏事件
         */
        handleFullScreen(){
            let element = document.documentElement;
            let vm = this;
            // 判断是否已经是全屏
            // 如果是全屏，退出
            // @ts-ignore
            if (vm.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    // @ts-ignore
                } else if (document.webkitCancelFullScreen) {
                    // @ts-ignore
                    document.webkitCancelFullScreen();
                    // @ts-ignore
                } else if (document.mozCancelFullScreen) {
                    // @ts-ignore
                    document.mozCancelFullScreen();
                    // @ts-ignore
                } else if (document.msExitFullscreen) {
                    // @ts-ignore
                    document.msExitFullscreen();
                }
            } else {    // 否则，进入全屏
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                    // @ts-ignore
                } else if (element.webkitRequestFullScreen) {
                    // @ts-ignore
                    element.webkitRequestFullScreen();
                    // @ts-ignore
                } else if (element.mozRequestFullScreen) {
                    // @ts-ignore
                    element.mozRequestFullScreen();
                    // @ts-ignore
                } else if (element.msRequestFullscreen) {
                    // IE11
                    // @ts-ignore
                    element.msRequestFullscreen();
                }
            }
            // 改变当前全屏状态
            // @ts-ignore
            vm.fullscreen = !vm.fullscreen;
        },
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
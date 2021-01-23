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
</template>

<script>
export default {
    name: "LFullscreenIcon",
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

<style scoped>

</style>
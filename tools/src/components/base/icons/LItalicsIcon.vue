<template>
    <div class="l-isText-italics-box">
        <a-tooltip
            placement="bottomRight"
            :getPopupContainer="
                    triggerNode => {
                        return triggerNode.parentNode || document.body;
                    }
                "
        >
            <template slot="title">
                斜体
            </template>
            <i
                v-if="!obj.isTextItalics"
                class="iconfont icon-xieti default_icon"
                @click="obj.isTextItalics = !obj.isTextItalics"
                :style="{
                            'color':obj.hasOwnProperty('isTextItalics') ? $store.state.text_color : $store.state.disabled_color,
                            fontSize:'16px'
                        }"
            ></i>
            <i
                v-else
                class="iconfont icon-xieti"
                @click="obj.isTextItalics = !obj.isTextItalics"
                :style="{
                            'color':$store.state.active_color,
                            fontSize:'16px'
                        }"
            ></i>
        </a-tooltip>
        <div class="mask" v-if="!obj.hasOwnProperty('isTextItalics')"></div>
    </div>
</template>

<script>
export default {
    name: "HideBtn",
    props:{
        obj:{
            type:Object
        }
    },
    components:{

    },
    data(){
        return{
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
.l-isText-italics-box{
    position: relative;
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        cursor: not-allowed;
    }
}
i{
    margin-right: 10px;
    cursor: pointer;
}
.default_icon{
    &:hover{
        color: #FFFFFF !important;
    }
}
</style>

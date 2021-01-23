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
            斜体
        </template>
        <i
            v-if="!obj.isTextItalics"
            class="iconfont icon-xieti default_icon"
            @click="obj.isTextItalics = !obj.isTextItalics"
            :style="{
                            'color':$store.state.text_color,
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
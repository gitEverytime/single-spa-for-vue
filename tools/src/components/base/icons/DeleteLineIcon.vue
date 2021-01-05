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
            删除线
        </template>
        <i
            v-if="!obj.isTextDeleteLine"
            class="iconfont icon-shanchuxian default_icon"
            @click="obj.isTextDeleteLine = !obj.isTextDeleteLine"
            :style="{
                            'color':$store.state.text_color,
                            fontSize:'16px'
                        }"
        ></i>
        <i
            v-else
            class="iconfont icon-shanchuxian"
            @click="obj.isTextDeleteLine = !obj.isTextDeleteLine"
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
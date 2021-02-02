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
            居中
        </template>
        <a-icon
            type="align-center"
            :style="{
                'color':$store.state.text_color,
                fontSize:'16px'
            }"
        />
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
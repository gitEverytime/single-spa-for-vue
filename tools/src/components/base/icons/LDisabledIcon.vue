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
            {{!obj.isDisabled ? '禁用' : '启用'}}
        </template>
        <i
            v-if="!obj.isDisabled"
            class="iconfont icon-jinyong default_icon"
            @click="obj.isDisabled = !obj.isDisabled"
            :style="{
                        'color':$store.state.text_color
                        }"
        ></i>
        <i
            v-else
            class="iconfont icon-jinyong"
            @click="obj.isDisabled = !obj.isDisabled"
            :style="{
                            'color':$store.state.active_color,
                            fontSize:'16px'
                        }"
        ></i>
    </a-tooltip>
</template>

<script>
export default {
    name: "DisabledIcon",
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
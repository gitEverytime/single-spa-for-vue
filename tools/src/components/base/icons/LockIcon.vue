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
            {{!obj.isLock ? '锁定' : '解锁'}}
        </template>
        <i
            v-if="!obj.isLock"
            class="iconfont icon-jiesuo default_icon"
            @click="obj.isLock = !obj.isLock"
            :style="{
                        'color':$store.state.text_color
                        }"
        ></i>
        <i
            v-else
            class="iconfont icon-suoding1"
            @click="obj.isLock = !obj.isLock"
            :style="{
                            'color':$store.state.active_color,
                            fontSize:'16px'
                        }"
        ></i>
    </a-tooltip>
</template>

<script>
export default {
    name: "LockIcon",
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
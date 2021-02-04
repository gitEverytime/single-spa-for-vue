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
            是否显示外边距
        </template>
        <a-icon
            :class="{
                    'border':showPicker
                }"
            @click="showPicker = !showPicker"
            type="border-outer"
            :style="{
                'color':$store.state.text_color,
                fontSize:'18px',
                cursor:'pointer',
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
            showPicker:false
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
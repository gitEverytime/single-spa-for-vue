<template>
   <div  class="l-isText-underLine-box">
       <a-tooltip
           placement="bottomRight"
           :getPopupContainer="
                    triggerNode => {
                        return triggerNode.parentNode || document.body;
                    }
                "
       >
           <template slot="title">
               下划线
           </template>
           <i
               v-if="!obj.isTextUnderLine"
               class="iconfont icon-xiahuaxian default_icon"
               @click="obj.isTextUnderLine = !obj.isTextUnderLine"
               :style="{
                    'color':obj.hasOwnProperty('isTextUnderLine') ? $store.state.text_color : $store.state.disabled_color,
                    fontSize:'16px'
                }"
           ></i>
           <i
               v-else
               class="iconfont icon-xiahuaxian"
               @click="obj.isTextUnderLine = !obj.isTextUnderLine"
               :style="{
                    'color':$store.state.active_color,
                    fontSize:'16px'
                }"
           ></i>
       </a-tooltip>
       <div class="mask" v-if="!obj.hasOwnProperty('isTextUnderLine')"></div>
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
.l-isText-underLine-box{
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

<template>
   <div class="l-isText-blod-box">
       <a-tooltip
           placement="bottomRight"
           :getPopupContainer="
                    triggerNode => {
                        return triggerNode.parentNode || document.body;
                    }
                "
       >
           <template slot="title">
               加粗
           </template>
           <i
               v-if="!obj.isTextBold"
               class="iconfont icon-jiacu default_icon"
               @click="handleClickBlod"
               :style="{
                            'color':$store.state.text_color,
                            fontSize:'16px'
                        }"
           ></i>
           <i
               v-else
               class="iconfont icon-jiacu"
               @click=""
               :style="{
                'color':$store.state.active_color,
                fontSize:'16px'
            }"
           ></i>
           <div class="mask"></div>
       </a-tooltip>
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
        handleClickBlod(){
            let vm = this;
            if( !vm.obj.hasOwnProperty('isTextBold')) return
            vm.obj.isTextBold = !vm.obj.isTextBold
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
.l-isText-blod-box{
    position: relative;
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
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
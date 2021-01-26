<template>
    <div class="l-font-family" style="margin-right: 10px">
        <a-select
            style="width: 120px"
            :getPopupContainer="
                triggerNode => {
                    return triggerNode.parentNode || document.body;
                }
            "
            @select="handleSelect"
            size="small"
            v-model:value="obj.fontFamily"
            ref="select"
        >
            <a-select-option
                v-for="(item,index) in options"
                :key="index"
                :value="item.value"
                :style="{
                    backgroundColor:'transparent'
                }"
            >
                <span
                    :style="{
                        fontFamily:item.value
                    }"
                >
                    {{item.text}}
                </span>
            </a-select-option>
        </a-select>
    </div>
</template>

<script>
export default {
    name: "LFontFamily",
    components:{

    },
    props:{
        obj:{
            type:Object
        }
    },
    data(){
        return{
            options:[
                {
                    text:'宋体',
                    value:'simsun'
                },
                {
                    text:'仿宋',
                    value:'FangSong'
                },
                {
                    text:'新宋体',
                    value:'NSimSun'
                },
                {
                    text:'楷体',
                    value:'KaiTi'
                },
                {
                    text:'幼圆',
                    value:'YouYuan'
                },
                {
                    text:'隶书',
                    value:'LiSu'
                },
                {
                    text:'黑体',
                    value:'SimHei'
                },
                {
                    text:'微软雅黑',
                    value:'Microsoft YaHei'
                },
                {
                    text:'微软雅黑Light',
                    value:'Microsoft YaHei Light'
                },
                {
                    text:'方正姚体',
                    value:'FZYaoti'
                }, {
                    text:'方正舒体',
                    value:'FZShuTi'
                },
                {
                    text:'华文细黑',
                    value:'STHeiti Light'
                },
                {
                    text:'华文楷体',
                    value:'STKaiti'
                },
                {
                    text:'华文隶书',
                    value:'STLiti'
                },
                {
                    text:'华文彩云',
                    value:'STCaiyun'
                },
                {
                    text:'华文琥珀',
                    value:'STHupo'
                },
                {
                    text:'华文新魏',
                    value:'STXinwei'
                },
                {
                    text:'华文中宋',
                    value:'STZhongsong'
                },
                {
                    text:'Times New Roman',
                    value:'Times New Roman'
                },
                {
                    text:'Microsoft Sans Serif',
                    value:'Microsoft Sans Serif'
                },
            ]
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        /**
         *
         */
        handleSelect(data){
            // let vm = this;
            // let obj = JSON.parse(JSON.stringify(vm.modal))
            // switch (data) {
            //     case 'insert':
            //         /**
            //          * 1, 绑定触发元素的别名
            //          * 2，弹窗基本信息数据源去重push
            //          */
            //         obj['title'] = `Modal${vm.sources.length}`;
            //         obj['triggerElement'] = vm.obj.alias;
            //         if(!vm.sources.filter(source => source.triggerElement === vm.obj.alias).length) vm.$set(vm.sources,vm.sources.length, obj);
            //         break;
            // }
        }
    }
}
</script>

<style scoped lang="scss">
    .l-font-family{

    }
</style>
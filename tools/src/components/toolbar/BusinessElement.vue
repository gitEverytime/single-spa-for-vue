<template>
    <li
        class="l_business_box"
        :class="'l_business_element' + index"
    >
        <div
            class="l_business_element"
            :style="{
                'color':$store.state.text_color
            }"
            :id="'l_business_element' + index">
            <i
                class="iconfont"
                :class="item.class"
                :style="{
                'color':$store.state.default_color
                }"
            ></i>
            <span>
                {{item.name}}
            </span>
        </div>
    </li>
</template>

<script lang="ts">
// @ts-ignore
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import 'jquery-ui-dist/jquery-ui.min.css'
import source from '../../ts/data_manage/source.ts'
import tools_comp_source from "../../ts/data_manage/tools_comp_source.ts";
// @ts-ignore
import { message } from 'ant-design-vue';
/**
 *  全局提示属性调整
 */
message.config({
    top: `100px`,
    duration: 2,
    maxCount: 3,
    getContainer:() => document.getElementById('tools-project')
});
export default {
    name: "BaseElement",
    components:{
    },
    props:{
        item:{
            type:Object
        },
        index:{
            type: Number
        },
    },
    data(){
        return{
            sources:source.base_info,
            obj:tools_comp_source.base_scource,
        }
    },
    computed:{
        layoutActiveClass(){
            let vm = this;
            return vm.$store.state.layout_active_class
        }
    },
    watch: {
        layoutActiveClass(data){
            let vm = this;
            /**
             * 克隆组件
             */
            vm.$nextTick(() => {
                $(`#l_business_element${vm.index}`).draggable({
                    helper:"clone",
                    revert: "invalid",
                    opacity: 0.7,
                    appendTo: `.tools-project`,
                    zIndex:1000,
                    stop: function (event,ui) {
                        let left: string = Number(ui.offset.left).toFixed(2);
                        if(Number(left) > 240) {
                            /**
                             * 判断是否重复拖入同一个容器
                             */
                            if($(`.${vm.$store.state.layout_active_class}`).find('.base-draggable').html()){
                                message.warning({
                                    content:'容器里面只能拖入一个表单元素！',
                                    getContainer:'.main-project'
                                });
                                return
                            }
                            /**
                             * 给数据源添加表单元素
                             */
                            let obj = JSON.parse(JSON.stringify(vm.obj))
                            obj.type = vm.item.type;
                            obj.width = vm.item.width;
                            obj.height = vm.item.height;
                            obj.operateLayer = vm.$store.state.operate_layer;
                            obj.name = vm.item.name + vm.sources.length;
                            obj.top = 0;
                            obj.left = 0;
                            obj.parentName = `.${data}`;
                            obj.handles = vm.item.handles;
                            obj.index = vm.sources.length;
                            obj.alias = `${vm.item.type}${vm.sources.length}`;
                            vm.$set(vm.sources,vm.sources.length, obj);
                        }else{
                            //
                        }
                    }
                });
            })
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
    },
    methods:{
    },
    beforeDestroy() {
    }
}
</script>

<style lang="scss" scoped>
li{
    width: 80px;
    height: 80px;
    margin-bottom: 2px;
    cursor: copy;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}
.l_business_element{
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    &:hover{
        border: 2px solid #009dff;
        border-radius: 4px;
        background-color: #323e52;
    }
    span{
        padding: 15px 0 0;
        font-size: 12px;
    }
}
</style>
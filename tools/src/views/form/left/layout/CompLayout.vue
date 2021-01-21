<template>
    <div
        class="l_comp_box"
        :class="'l_comp_element' + index"
    >
        <div
            class="l_comp_element"
            :style="{
                'color':$store.state.text_color
            }"
            :id="'l_comp_element' + index">
            <i
                class="iconfont textBold"
                :class="item.class"
                :style="{
                    'color':$store.state.default_color,
                    fontSize:'40px',
                    fontWeight:'200'
                }"
            ></i>
            <span>
                {{item.name}}
            </span>
        </div>
    </div>
</template>

<script>
// @ts-ignore
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import 'jquery-ui-dist/jquery-ui.min.css'
import source from '../../../../ts/data_manage/source.ts'
import tools_comp_source from "../../../../ts/data_manage/tools_comp_source.ts";
export default {
    name: "CompLayout",
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
            sources:source.layout_info,
            obj:tools_comp_source.layout_scource
        }
    },
    watch: {

    },
    created() {
    },
    mounted() {
        let vm = this;
        /**
         * 克隆组件
         */
        vm.$nextTick(() => {
            $(`#l_comp_element${vm.index}`).draggable({
                helper:"clone",
                revert: "invalid",
                opacity: 0.7,
                appendTo: ".tools-project",
                zIndex:1000,
                stop: function (event,ui) {
                    let left = Number(ui.offset.left).toFixed(2);
                    if(Number(left) > 240) {
                        let obj = JSON.parse(JSON.stringify(vm.obj))
                        obj.type = 'l_flex';
                        obj.width = '100%';
                        obj.height = '50';
                        obj.flex =  vm.item.flex;
                        obj.operateLayer = vm.$store.state.operate_layer;
                        obj.name = vm.item.name + vm.sources.length;
                        obj.index = vm.sources.length;
                        vm.$set(vm.sources,vm.sources.length, obj);
                        console.log(vm.sources)
                    }else{
                        //
                    }
                }
            });
        })
    },
    methods:{

    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
.l_comp_element{
    width: 240px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    cursor: pointer;
    &:hover{
        border: 2px solid #009dff;
        border-radius: 4px;
        background-color: #323e52;
    }
    span{
        padding: 15px 0 0;
        font-size: 12px;
    }
    .textBold{
        -webkit-text-stroke-width: 0.1px;
    }
}
</style>
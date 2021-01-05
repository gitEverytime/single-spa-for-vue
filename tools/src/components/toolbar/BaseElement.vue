<template>
    <li
        class="l_base_box"
        :class="'l_base_element' + index"
    >
        <div
            class="l_base_element"
            :style="{
                'color':$store.state.text_color
            }"
            :id="'l_base_element' + index">
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
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import 'jquery-ui-dist/jquery-ui.min.css'
import source from '../../ts/data_manage/source.ts'
import tools_comp_source from "../../ts/data_manage/tools_comp_source.ts";
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
                $(`#l_base_element${vm.index}`).draggable({
                    helper:"clone",
                    revert: "invalid",
                    opacity: 0.7,
                    appendTo: `.tools-project`,
                    zIndex:1000,
                    stop: function (event,ui) {
                        if(Number(ui.offset.left).toFixed(2) > 240) {
                            let obj = JSON.parse(JSON.stringify(vm.obj))
                            obj.type = vm.item.type;
                            obj.width = '300';
                            obj.height = '34';
                            obj.name = vm.item.name + vm.sources.length;
                            obj.top = 20;
                            obj.left = 20;
                            obj.parentName = `.${data}`;
                            obj.index = vm.sources.length;
                            console.log(obj)
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
.l_base_element{
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
<template>
    <div  class="l-row">
        <div
            v-for="(child,key) of form.children"
            :key="key"
            @click="handleClickCol(child)"
            class="l-col-box"
            :id="'l-col-box' + child.time"
            :class="
                [
                    'l-col-box' + form.time,
                    'l-append-' + index + '-' + key,
                    {
                        'activeColor': $store.state.layout_active_class === 'l-append-' + form.time + '-' + child.time,
                        'l-bor-right':$store.state.is_show_dotted,
                        'dotted':$store.state.is_show_dotted
                    }
                ]
            "
            :style="{
                height:'100%',
                width:100/Number(form.flex) + '%',
                padding:form.padding + 'px' || 0,
                margin:form.margin + 'px' || 0
            }"
        >
            <!--主界面：基础组件渲染盒子-->
            <temp-base-draggable
                :className="'.l-append-' + form.time + '-' + child.time"
                v-if="$route.params.type === '0'"
            >
            </temp-base-draggable>
            <!--表单界面：基础组件渲染盒子-->
            <temp-base-no-draggable
                :className="'.l-append-' + form.time + '-' + child.time"
                v-if="$route.params.type === '1'"
            >
            </temp-base-no-draggable>
        </div>
    </div>
</template>

<script>
// @ts-ignore
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-dist/jquery-ui.min.css';
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
import TempBaseDraggable from '../../toolbar/BaseDraggable.vue'
import TempBaseNoDraggable from '../../toolbar/BaseNoDraggable.vue'
export default {
    name: "LayoutCol",
    components:{
        VueDraggableResizable,
        TempBaseDraggable,
        TempBaseNoDraggable
    },
    props:{
        form:{
            type:Object
        },
        index:{
            type:Number
        }
    },
    data(){
        return{
            child:{}
        }
    },
    mounted() {
        let vm = this;
        // vm.form.children.forEach((child,key) => {
        //     $(`#l-col-box${child.time}`).resizable({
        //         zIndex:99,
        //         autoHide: true,
        //         ghost: true,
        //         opacity:0,
        //         handles: "e",
        //         minHeight: 30,
        //         stop: function (event,ui) {
        //             console.log(ui)
        //
        //             // vm.form.height = Number.parseInt(ui.size.height);
        //         }
        //     })
        // })
    },
    created() {
    },
    methods:{
        /**
         * 点击选中当前组件，回传数据给公共管理库，记录
         */
        handleClickDragElement(){
            let vm = this;
            vm.$store.commit('setCompLayoutInfo',vm.form);
        },
        /**
         * 点击选中当前格子
         */
        handleClickCol(child){
            let vm = this;
            vm.child = child;
            vm.$store.commit('setLayoutActiveClass','l-append-' + vm.form.time + '-' + child.time);
        },
    }
}
</script>

<style scoped lang="scss">
    .vdr {
        border: none;
    }
    .l-row {
        display: flex;
        flex-flow: row wrap;
        position: relative;
        width: 100%;
    }
    .l-col,.l-col-box{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .l-col-24 {
        display: flex;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .l-col-12 {
        display: flex;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .l-col-8 {
        display: flex;
        flex: 0 0 33.33%;
        max-width: 33.33%;
    }
    .l-col-6 {
        display: flex;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .dotted{
        border-top:#999 dashed 1px;
        border-left:#999 dashed 1px;
        border-bottom:#999 dashed 1px;
    }
    .dotted:last-child{
        border-right: #999 dashed 1px;
    }
    .activeColor{
        border: #009dff solid 1px !important;
    }
</style>
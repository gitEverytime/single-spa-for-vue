<template>
    <div
        class="l_detail_box"
        :class="'l_detail_element' + index"
        ref="modal1"
    >
        <div
            class="l_detail_element"
            :style="{
                'color':$store.state.text_color
            }"
            :id="'l_detail_element' + index">
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
        <!--        弹窗-->
        <a-modal
            v-model="visible"
            title="请输入列数"
            @ok="handleOk"
            :dialogStyle="{
                textAlign:'left'
            }"
            cancelText="取消"
            okText="确认"
            okType="primary"
            :getContainer="()=>$refs.modal1"
        >
            <a-form-model
                :form="form"
                ref="form"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 12 }"
                ::rules="rules"
            >
                <a-form-model-item label="列数" required prop="number">
                    <a-input
                        v-model.number="form.number"
                        v-decorator="['note', { rules: [{ required: true, message: '请输入列数' }] }]"
                    />
                </a-form-model-item>
            </a-form-model>
        </a-modal>
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
            obj:tools_comp_source.detail_source,
            visible:false,
            formLayout: 'horizontal',
            form: {
                number:6
            },
            rules: {
                number: [{ required: true, message: '请输入明细表的列数', trigger: 'change' }],
            },
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
            $(`#l_detail_element${vm.index}`).draggable({
                helper:"clone",
                revert: "invalid",
                opacity: 0.7,
                appendTo: ".tools-project",
                zIndex:1000,
                stop: function (event,ui) {
                    let left = Number(ui.offset.left).toFixed(2);
                    if(Number(left) > 240) {
                        vm.visible =  true;
                        // if() {
                        //
                        // }

                    }else{
                        //
                    }
                }
            });
        })
    },
    methods:{
        /**
         * 点击确认
         */
        handleOk(){
            let vm = this;
            let obj = JSON.parse(JSON.stringify(vm.obj))
            obj.type = 'l_detail_table';
            obj.width = '100%';
            obj.height = '50';
            obj.flex =  vm.item.flex;
            obj.name = vm.item.name + vm.sources.length;
            obj.index = vm.sources.length;
            obj.table_data.forEach((tr,r_index) => {
                tr.time = Date.parse(new Date()) + r_index;
                tr.children.forEach((td,d_index) => {
                    td.time = Date.parse(new Date()) + d_index;
                })
            })
            vm.$set(vm.sources,vm.sources.length, obj);
            vm.visible = false;
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
.l_detail_element{
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
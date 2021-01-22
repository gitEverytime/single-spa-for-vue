<template>
    <div
        :style="{
            position:'relative'
        }"
    >
        <!--                                         表单组件模块                                  -->
        <!--        输入框-->
        <comp-l-input
            v-if="form.type === 'l_input'"
            :form="form"
            :index="index">
        </comp-l-input>
        <!--        按钮-->
        <comp-l-button
            v-if="form.type === 'l_btn'"
            :form="form"
            :index="index">
        </comp-l-button>
        <!--        下拉-->
        <comp-l-select
            v-if="form.type === 'l_select'"
            :form="form"
            :index="index"
        >
        </comp-l-select>
        <!--        单选框-->
        <comp-l-radio
            v-if="form.type === 'l_radio'"
            :form="form"
            :index="index"
        >
        </comp-l-radio>
        <!--        复选框-->
        <comp-l-check-box
            v-if="form.type === 'l_checkbox'"
            :form="form"
            :index="index"
        >
        </comp-l-check-box>
        <!--        开关-->
        <comp-l-switch
            v-if="form.type === 'l_switch'"
            :form="form"
            :index="index"
        >
        </comp-l-switch>
        <!--        日期时间-->
        <comp-l-date-picker
            v-if="form.type === 'l_date'"
            :form="form"
            :index="index"
        >
        </comp-l-date-picker>
        <!--        文本框-->
        <comp-l-text-area
            v-if="form.type === 'l_textarea'"
            :form="form"
            :index="index"
        >
        </comp-l-text-area>
        <!--                                     业务组件模块                               -->
        <comp-l-title
            v-if="form.type === 'l_title'"
            :form="form"
            :index="index"
        ></comp-l-title>
        <span class="closeLayoutBtn" title="删除" @click="handleClickDel()">
            <a-icon
                type="close-circle"
                :style="{
                    'color':$store.state.red_color
                }"
            />
        </span>
    </div>
</template>

<script lang="ts">
import source from '../../ts/data_manage/source.ts'
/**
 * 基础表单组件
 */
import CompLInput from '../../components/base/input/LInput.vue';
import CompLButton from '../../components/base/btns/LButton.vue';
import CompLSelect from '../../components/base/select/LSelect.vue';
import CompLRadio from '../../components/base/radio/LRadio.vue';
import CompLCheckBox from '../../components/base/check_box/LCheckBox.vue';
import CompLSwitch from '../../components/base/switch/LSwitch.vue';
import CompLDatePicker from '../../components/base/date_picker/LDatePicker.vue';
import CompLTextArea from '../../components/base/textarea/LTextArea.vue';
/**
 * 业务组件
 */
import CompLTitle from '../../components/business/title/LTitle.vue';

export default {
    name: "LoadBaseElement",
    components:{
        /**
         * 表单
         */
        CompLInput,
        CompLButton,
        CompLSelect,
        CompLRadio,
        CompLCheckBox,
        CompLSwitch,
        CompLDatePicker,
        CompLTextArea,
        /**
         * 业务
         */
        CompLTitle
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
            sources:source.base_info,
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        /**
         * 删除
         */
        handleClickDel(){
            let vm = this;
            vm.sources.forEach((source,index) => {
                if(source.alias === vm.form.alias && source.index === vm.form.index) vm.sources.splice(index,1);
            })
        },
    }
}
</script>

<style scoped lang="scss">
    .closeLayoutBtn{
        position: absolute;
        bottom:2px;
        right: 30px;
        width: 18px;
        height: 19px;
        //background: #FFFFFF;
        cursor: pointer;
    }
</style>
<template>
    <div
        @click="$emit('handleClickDraggable',index)"
        :style="{
            position:'relative'
        }"
    >
        <!-- 输入框-->
        <comp-l-input
            v-if="form.type === 'l_input' && !form.isHide"
            :form="form"
            :index="index">
        </comp-l-input>
        <!-- 按钮-->
        <comp-l-button
            v-if="form.type === 'l_btn'  && !form.isHide"
            :form="form"
            :index="index">
        </comp-l-button>
        <span class="closeLayoutBtn" title="删除" @click="handleClickDel(index)" v-if="!form.isHide">
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
import CompLInput from '../../components/base/input/LInput.vue'
import CompLButton from '../../components/base/btns/LButton.vue'
import source from '../../ts/data_manage/source.ts'

export default {
    name: "LoadBaseElement",
    components:{
        CompLInput,
        CompLButton
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
        handleClickDel(index){
            let vm = this;
            console.log(vm.sources)
            vm.sources.splice(index,1);
        },
    }
}
</script>

<style scoped lang="scss">
    .closeLayoutBtn{
        position: absolute;
        bottom:2px;
        right: 2px;
        width: 18px;
        height: 19px;
        //background: #FFFFFF;
        cursor: pointer;
    }
</style>
<template>
    <div @click="handleClickCol()"
         class="l-detail-body-td"
        :class=" {
           'activeColor': $store.state.layout_active_class === className,
        }"
        :style="{
            width:'100%',
            height:'100%',

        }"
        >
        <input
            v-if="!sources.filter(source => source.parentName === '.' + className).length"
            v-model="data.title"
            :placeholder="index === 0 ? '明细区' : ''"
        />
        <temp-base-no-draggable v-else :className="'.' + className"></temp-base-no-draggable>
    </div>
</template>

<script>
import TempBaseNoDraggable from '../../../toolbar/BaseNoDraggable.vue'
import source from '../../../../ts/data_manage/source.ts'
export default {
    name: "DetailBodyTd",
    components:{
        TempBaseNoDraggable
    },
    props:{
        data:{
            type:Object,
        },
        index:{
            type:Number
        },
        className:{
            type:String
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
         * 点击选中当前格子
         */
        handleClickCol(){
            let vm = this;
            vm.$store.commit('setLayoutActiveClass',vm.className);
        },
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .activeColor{
        border: #009dff solid 1px !important;
    }
    .l-detail-body-td{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    input{
        outline: none;
        text-align: center;
        background: transparent;
        width: 100% ;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        height: 100%;
    }
</style>
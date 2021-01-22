<template>
    <ul class="l_base_comp">
        <!-- 基础表单组件-->
        <base-element
            v-if="type === 'base'"
            v-for="(item,index) in datas"
            :item="item"
            :index="index"
        >
        </base-element>
        <base-element
            v-if="type === 'business'"
            v-for="(item,index) in datas"
            :item="item"
            :index="index"
        >
        </base-element>
    </ul>
</template>

<script lang="ts">
import BaseElement from './BaseElement.vue'
import LayoutElement from './LayoutElement.vue'
export default {
    name: "BaseComp",
    components:{
        BaseElement,
        LayoutElement
    },
    props:{
        datas:{
            type:Array
        },
        type:{
            type:String
        }
    },
    data(){
        return{

        }
    },
    watch: {

    },
    created() {
    },
    mounted() {

    },
    methods:{

    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .l_base_comp{
        width: 240px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>
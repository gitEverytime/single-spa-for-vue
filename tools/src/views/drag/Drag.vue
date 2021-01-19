<template>
    <div class="l-drag-box">
        <!-- head-->
        <temp-drag-head></temp-drag-head>
        <!-- content-->
        <temp-drag-content></temp-drag-content>
    </div>
</template>

<script lang="ts">
import TempDragHead from './DragHead.vue'
import TempDragContent from './DragContent.vue'
export default {
    components:{
        TempDragHead,
        TempDragContent
    },
    data() {
        return {

        }
    },
    created() {
    },
    mounted() {
        let cc : string = '121';
        console.log(cc)
        interface LabelledValue{
            label:string
        }
        function printValue(obj:LabelledValue){
            console.log(obj.label)
        }
        let obj = {size:19,label:'ssss'}
        printValue(obj);
    },
    methods: {

    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .l-drag-box{
        height: 100%;


    }
</style>
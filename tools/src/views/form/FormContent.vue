<template>
    <div class="l-drag-content" id="toolsContent" >
        <!-- 左半区-->
        <temp-content-left></temp-content-left>
        <!-- 中间区域-->
        <temp-content-cont></temp-content-cont>
        <!-- 右半区-->
        <temp-content-right></temp-content-right>
    </div>
</template>

<script>
// import TempContentLeft from "../drag/content/Left";
import TempContentRight from "../drag/content/Right";
import TempContentCont from "../form/content/Cont";
import TempContentLeft from '../form/content/Left.vue'
// import TempContentRight from '../form/content/Right.vue'

export default {
    name: "FormContent",
    components:{
        TempContentLeft,
        TempContentRight,
        TempContentCont,
    },
    data(){
        return{

        }
    },
    mounted() {
    },
    created() {
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
    .l-drag-content{
        height: 100%;
        margin-bottom: -40px;
        position: relative;
        overflow: hidden;
    }
</style>
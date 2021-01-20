<template>
    <div class="l-drag-box">
        <!-- head-->
        <temp-drag-head></temp-drag-head>
        <!-- content-->
        <temp-form-content></temp-form-content>
    </div>
</template>

<script>
import TempDragHead from "../drag/DragHead";
import TempFormContent from "../form/FormContent.vue";
export default {
    name: "Form",
    components:{
        TempDragHead,
        TempFormContent
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
    .l-drag-box{
        height: 100%;


    }
</style>
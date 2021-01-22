<template>
    <div class="l-title-box">
        <comp-no-border-l-input></comp-no-border-l-input>
    </div>
</template>

<script>
import CompNoBorderLInput from '../../base/input/NoBorderLInput.vue';
export default {
    name: "LTitle",
    components:{
        CompNoBorderLInput
    },
    props:{

    },
    data(){
        return{

        }
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
    .l-title-box{
        height: 80px;
    }
</style>
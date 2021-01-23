<template>
    <div class="l-drag-head-left">
        <comp-l-home-icon :obj="comp_base_info"></comp-l-home-icon>
    </div>
</template>

<script>
import CompLHomeIcon from '../../../components/base/icons/LHomeIcon.vue'
export default {
    name: "HeadLeft",
    components:{
        CompLHomeIcon
    },
    computed:{
        comp_base_info(){
            let vm = this;
            return vm.$store.state.comp_base_info;
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

<style scoped>

</style>
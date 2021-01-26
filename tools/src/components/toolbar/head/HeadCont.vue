<template>
    <div class="l-head-cont">
        <comp-l-font-family :obj="comp_base_info"></comp-l-font-family>
        <comp-l-font-size :obj="comp_base_info"></comp-l-font-size>
        <comp-l-blod-icon :obj="comp_base_info"></comp-l-blod-icon>
        <comp-l-italics-icon :obj="comp_base_info"></comp-l-italics-icon>
        <comp-l-under-line-icon :obj="comp_base_info"></comp-l-under-line-icon>
        <comp-l-delete-line-icon :obj="comp_base_info"></comp-l-delete-line-icon>
    </div>
</template>

<script>
import CompLHideIcon from '../../../components/base/icons/LHideIcon.vue'
import CompLDisabledIcon from '../../../components/base/icons/LDisabledIcon.vue'
import CompLLockIcon from '../../../components/base/icons/LockIcon.vue'
import CompLBlodIcon from '../../../components/base/icons/LBlodIcon.vue'
import CompLItalicsIcon from '../../../components/base/icons/LItalicsIcon.vue'
import CompLUnderLineIcon from '../../../components/base/icons/LUnderLineIcon.vue'
import CompLDeleteLineIcon from '../../../components/base/icons/LDeleteLineIcon.vue'
import CompLFontFamily from '../../../components/business/font/LFontFamily.vue'
import CompLFontSize from '../../../components/business/font/LFontSize.vue'
export default {
    name: "HeadCont",
    components:{
        CompLHideIcon,
        CompLDisabledIcon,
        CompLLockIcon,
        CompLBlodIcon,
        CompLItalicsIcon,
        CompLDeleteLineIcon,
        CompLUnderLineIcon,
        CompLFontFamily,
        CompLFontSize
    },
    computed:{
        comp_base_info(){
            let vm = this;
            return vm.$store.state.comp_base_info;
        }
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
    .l-head-cont{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
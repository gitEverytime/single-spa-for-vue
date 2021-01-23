<template>
    <div class="l-drag-head-right">
        <comp-l-dotted-icon></comp-l-dotted-icon>
        <comp-l-square-icon></comp-l-square-icon>
        <comp-l-fullscreen-icon></comp-l-fullscreen-icon>
        <comp-l-open-icon></comp-l-open-icon>
    </div>
</template>

<script>
import CompLDottedIcon from '../../../components/base/icons/LDottedIcon.vue';
import CompLSquareIcon from '../../../components/base/icons/LSquareIcon.vue';
import CompLFullscreenIcon from '../../../components/base/icons/LFullscreenIcon.vue';
import CompLOpenIcon from '../../../components/base/icons/LOpenIcon.vue'
export default {
    name: "HeadRight",
    components:{
        CompLDottedIcon,
        CompLSquareIcon,
        CompLFullscreenIcon,
        CompLOpenIcon
    }
}
</script>

<style scoped>

</style>
<template>
    <div class="g-warp">
        <a-layout id="components-layout-demo-top-side">
            <Header v-if="isHiddenHead"></Header>
            <div class="g-content">
                <router-view/>
                <div id="main" style="height: 100%"></div>
            </div>
        </a-layout>
    </div>
</template>
<script>
    import topNav from '../components/topNav.vue';
    import Header from '../components/Header.vue'
    import sideNav from '../components/sideNav.vue';
    // import menuObj from '../config.ts'
    export default {
        data() {
            return {
                allRoutes:[]
            }
        },
        computed:{
            isHiddenSideNav() {
                return this.$route.matched.some(item => {
                    return item.meta.hiddenSideNav
                })
            },
            isHiddenHead () {
                return this.$route.matched.some(item => {
                    return item.meta.hiddenHead
                })
            }
        },
        components:{topNav,sideNav,Header},

    }
</script>
<style lang="less">
    .g-warp{
        height: 100%;
    }
    .ant-layout{
        height: 100%;
    }
    .g-content{
        height: 100%;
    }
</style>

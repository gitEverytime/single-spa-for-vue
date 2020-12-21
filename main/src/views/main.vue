<template>
    <div class="g-warp">
        <a-layout id="components-layout-demo-top-side">
            <Header></Header>
            <div class="g-content">
                <router-view/>
                <div id="main"></div>
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
            // menu() {
            //     const path = this.$route.path.slice(1);
            //     const module = path.split('/')[0]
            //     return menuObj[module];
            // }
        },
        components:{topNav,sideNav,Header},

    }
</script>
<style lang="less">

</style>

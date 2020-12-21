<template>
    <a-layout-header class="header">
        <div class="logo" />
        <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['1']"
            :style="{ lineHeight: '64px' }"
        >
            <a-menu-item key="1">
                <router-link to="/about" :class="{'router-link-exact-active':$route.path.indexOf('/about') >= 0}">合同管理</router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <router-link to="/goods" :class="{'router-link-exact-active':$route.path.indexOf('/goods') >= 0}">资金管理</router-link>
            </a-menu-item>
            <a-menu-item key="3">
                <router-link to="/customers" :class="{'router-link-exact-active':$route.path.indexOf('/customers') >= 0}">项目进度跟踪</router-link>
            </a-menu-item>
            <a-menu-item key="4">
                <router-link to="/iframe" :class="{'router-link-exact-active':$route.path.indexOf('/iframe') >= 0}">食品安全</router-link>
            </a-menu-item>
        </a-menu>
    </a-layout-header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

</style>
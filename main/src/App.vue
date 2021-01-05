<template>
    <div id="app" class="main-project">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
    height: 100%;
    width: 100%;
}
</style>

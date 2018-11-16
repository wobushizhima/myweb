<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
}
body, html {
  height: 100%;
  margin:0;
}
.BMap_cpyCtrl{
  display: none;
}
.anchorBL{
  display: none;
}
</style>

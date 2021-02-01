<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
button {
  border: 0;
  background: #fff;
  outline: 0;
}
</style>
<style lang="less">
#app {
  height: 100vh;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
  height: 100vh;
  color: #333;
  background: #f8f8f8;
  -webkit-overflow-scrolling: touch;
}
.body-main {
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  overflow: auto;
}
</style>

<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>
<script>
import navigation from "./components/navigation";
export default {
  components: {
    navigation,
  }
}
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Lobster Two,serif;
  font-size: 16px;
}
#app {
  font-family: Lobster Two, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
  font-family: Lobster Two,serif;
}
</style>

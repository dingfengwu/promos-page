<template>
  <promos></promos>
</template>

<script>
import promos from "./components/promos.vue";
import {appConfig} from "./assets/js/config/static.js";

export default {
  name: 'App',
  mounted(){
    document.title=appConfig.documentTitle;
  },
  components: {
    promos
  }
}
</script>

<style>
@import "./assets/css/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

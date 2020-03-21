<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/live-streaming.svg" height="250px">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Stream msg="Check it out"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Stream from './components/Stream.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Stream
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

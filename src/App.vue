<template>
  <div id="app">
    <div id="header">
      <img id="header-logo" alt="Seattle Humane Logo" src="./assets/seattle-humane-logo-color-249x110.jpg">
      <div id="header-site-title">
        <h1>Kennel Hub</h1>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#header {
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
}
#header-logo {
  padding-right: 30px;
}
#header-site-title {
  display: inline-flex;
  flex-direction: column;
}
</style>

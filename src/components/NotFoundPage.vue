<template>
  <div class="not-found-container">
    <h1>Page not found!</h1>
    <router-link to="/">Take me home!</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

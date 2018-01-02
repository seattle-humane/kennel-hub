<template>
  <li class="animal-summary">
    {{ animal.name }}
  </li>
</template>

<script>
  export default {
    name: 'animal-summary',
    props: ['animal']
  }
</script>

<style scoped>
.animal-summary {

}
</style>

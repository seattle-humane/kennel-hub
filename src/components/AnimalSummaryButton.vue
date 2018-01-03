<template>
  <button
    class="btn-outline-dark"
    @click="$emit('click')"
    >
    {{ animal.name }}
  </button>
</template>

<script>
  export default {
    name: 'animal-summary-button',
    props: ['animal']
  }
</script>

<style scoped>
button {
  margin: 6px 0;
}
</style>

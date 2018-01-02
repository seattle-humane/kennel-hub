<template>
  <ul>
    <li
      is="animal-summary"
      v-for="animal in animals"
      :animal="animal"
      :key="animal.id"
      />
  </ul>
</template>

<script>
  import animalSummary from './AnimalSummary'

  export default {
    name: 'animal-selector-list',
    props: ['animals'],
    components: {
      'animal-summary': animalSummary
    }
  }
</script>

<style scoped>

</style>

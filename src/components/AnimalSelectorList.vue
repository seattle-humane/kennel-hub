<template>
  <form class="form-inline" @submit.prevent>
    <animal-summary-button
      v-for="animal in animals"
      :animal="animal"
      :key="animal.id"
      @click="$emit('select', { target: animal })"
      />
  </form>
</template>

<script>
  import AnimalSummaryButton from './AnimalSummaryButton'

  export default {
    name: 'animal-selector-list',
    props: ['animals'],
    components: {
      'animal-summary-button': AnimalSummaryButton
    }
  }
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>

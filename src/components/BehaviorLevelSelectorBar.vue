<template>
  <form class="form-inline form-inline-flex bg-light" @submit.prevent>
    <button
      v-for="behaviorLevel in behaviorLevels"
      :key="behaviorLevel"
      :class="['btn', (selected == behaviorLevel ? 'btn-primary' : 'btn-secondary')]"
      @click="selected = behaviorLevel; $emit('select', behaviorLevel);">
      {{ behaviorLevel }}
    </button>
  </form>
</template>

<script>
  export default {
    name: 'behavior-level-selector-bar',
    data: function () {
      return {
        selected: 'DBS 2',
        behaviorLevels: ['DBS 2', 'DBS 3', 'DBS 4', 'BPA', 'Staff', 'BEH Staff']
      }
    }
  }
</script>

<style scoped>
.form-inline-flex {
  padding: 6px 0 6px 0;
  display: inline-flex;

}
button {
  margin: 8px;
}
</style>

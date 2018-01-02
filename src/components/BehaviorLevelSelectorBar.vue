<template>
  <form class="form-inline form-inline-flex bg-light">
    <button
      class="btn btn-light"
      type="button"
      v-for="behaviorLevel in behaviorLevels"
      :key="behaviorLevel">
      {{ behaviorLevel }}
    </button>
  </form>
</template>

<script>
  export default {
    name: 'behavior-level-selector-bar',
    data: function () {
      return {
        behaviorLevels: ['DBS 2', 'DBS 3', 'DBS 4', 'BPA', 'Staff', 'D-Staff']
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

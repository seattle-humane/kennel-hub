<template>
  <form class="form-inline">
    <button
      class="btn btn-outline-success"
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
ul {
  list-style: none;
  display: flex;
  background: rgb(219, 57, 46);
}
</style>

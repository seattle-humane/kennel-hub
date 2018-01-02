<template>
  <ul class="behavior-level-selector-bar">
    <li
      v-for="behaviorLevel in behaviorLevels"
      :key="behaviorLevel">
      {{ behaviorLevel }}
    </li>
  </ul>
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

</style>

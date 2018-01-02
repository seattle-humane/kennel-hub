<template>
  <div class="hub-page-container">
    <behavior-level-selector-bar />
    <div class="lists-container">
      <div class="taking-out-container">
        <h2>Taking out...</h2>
        <animal-selector-list
          :animals="takingOutCandidateAnimals"/>
      </div>
      <div class="done-with-container">
        <h2>Done with...</h2>
        <animal-selector-list
          :animals="doneWithCandidateAnimals"/>
      </div>
    </div>
  </div>
</template>

<script>
  import AnimalSelectorList from './AnimalSelectorList'
  import BehaviorLevelSelectorBar from './BehaviorLevelSelectorBar'

  export default {
    name: 'hub-page',
    data: function () {
      return {
        takingOutCandidateAnimals: [
          { id: 1, name: 'Abby' },
          { id: 2, name: 'Banjo' }
        ],
        doneWithCandidateAnimals: [
          { id: 3, name: 'Carmen' },
          { id: 4, name: 'Donovan' }
        ]
      }
    },
    components: {
      'animal-selector-list': AnimalSelectorList,
      'behavior-level-selector-bar': BehaviorLevelSelectorBar
    }
  }
</script>

<style scoped>
.lists-container {
  display: flex;
  justify-content: space-around;
}
</style>

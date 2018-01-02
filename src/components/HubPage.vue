<template>
  <div class="hub-page-container">
    <behavior-level-selector-bar />
    <div class="lists-container">
      <animal-selector-list
        :animals="takingOutCandidateAnimals"/>
      <animal-selector-list
        :animals="doneWithCandidateAnimals"/>
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

</style>

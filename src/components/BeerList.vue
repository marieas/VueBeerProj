<script setup>
  import { useBeerStore } from '@/stores/store'
  import BeerItem from './BeerItem.vue'
  import BeerDetails from './BeerDetails.vue'

  const beerStore = useBeerStore()
  beerStore.fetchBeer()
</script>

<template>
  <div class="ListContainer">
    <div v-if="beerStore.detailedView">
      <BeerDetails/>
    </div>
    <div v-else>
      <BeerItem v-for="item in beerStore.beerList" :beerItem="item" @click="beerStore.detailedBeerView(item)"/>
    </div>
  </div>
</template>
<style scoped>
  .ListContainer{
    width: 100%;
  }
</style>

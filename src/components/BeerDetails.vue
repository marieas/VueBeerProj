<script setup>
import { useBeerStore } from '@/stores/store'
import BeerItem from './BeerItem.vue'
import IngredientList from './IngredientList.vue'
import {defineAsyncComponent} from 'vue';

const beerStore = useBeerStore()
var hops = [];
var malt = [];
var yeast = []

const icon = defineAsyncComponent(() =>
  import(`../assets/exit.svg`)
);

initIngredients()
function initIngredients(){
  hops = beerStore.detailedBeer.ingredients.hops;
  malt = beerStore.detailedBeer.ingredients.malt;
  yeast = [{
    name: beerStore.detailedBeer.ingredients.yeast,
    attribute: '',
    amount: ''
  }]
}
</script>
<template>
  <div class="deets">
    <BeerItem :beerItem="beerStore.detailedBeer" class="component"/>
    <IngredientList :ingredients="hops" :title="'Hops'" class="component"/>
    <IngredientList :ingredients="malt" :title="'Malt'" class="component"/>
    <IngredientList :ingredients="yeast" :title="'Yeast'" class="component"/>
    <icon class="icon" @click="beerStore.detailedBeerView(beerStore.detailedBeer)"/>
  </div>

</template>

<style scoped>
  .deets{
    display: flex;
    justify-content: space-between;
  }
  .icon{
    padding: 40px;
    border: 1px solid #ccc;
    text-align: center;
    background-color: #808080;
    height: 100px;
    width: 100px;
  }
  .component {
  flex: 1; /* Each component takes an equal amount of space */
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #f0f0f0;
}
</style>

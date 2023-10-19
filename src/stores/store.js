import { defineStore } from 'pinia'

export const useBeerStore = defineStore('store', {
  state: () => ({
      beerList: [],
      detailedView: false,
      detailedBeer: null
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    detailedBeerView(beer){
      this.detailedBeer = beer;
      this.detailedView = !this.detailedView;
    },
    async fetchBeer(){
      try{
            const response = await fetch('https://api.punkapi.com/v2/beers');
            this.beerList = await response.json();
      }
      catch (error) {
        console.log(error);
      }
    }

  }
})

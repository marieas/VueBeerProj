<script setup>
const props = defineProps(['beerItem'])

function getImageUrl(){
  return props.beerItem.image_url;
}
</script>
<template>
  <div class="component">
    <h1 class="component-heading">{{beerItem.name}}</h1>
    <img :src="getImageUrl()" alt="" class="component-image">

    <p class="component-description">
      <slot>{{beerItem.abv}}</slot>
      <slot>{{beerItem.description}}</slot>
    </p>
  </div>
</template>

<style scoped>

/* Component container */
.component {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  text-align: center;
  max-width: 300px; /* Adjust the width as needed */
}

/* Heading */
.component-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

/* Image */
.component-image {
  width: 50%;
  height: 50%;
  margin-bottom: 10px;
}

/* Description text */
.component-description {
  font-size: 16px;
  color: #666;
  line-height: 1.4;
}
</style>

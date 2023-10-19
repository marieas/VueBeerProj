<script setup>
import Ingredient from './Ingredient.vue'
const props = defineProps(['ingredients','title'])

</script>

<template>
  <div class="ingredient-list">
    <h2 class="list-heading">{{ props.title }}</h2>
    <ul class="list">
      <li v-for="ingredient in ingredients" :key="ingredient.id" class="list-item">
        <Ingredient>
        <template #heading>{{ingredient.name}}</template>
        {{ingredient.attribute}}
        <div>{{ingredient.amount}}</div>
      </Ingredient>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Component container */
.ingredient-list {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  max-width: 300px; /* Adjust the width as needed */
}

/* Heading */
.list-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

/* Ingredient list */
.list {
  list-style: none;
  padding: 0;
}

/* List items */
.list-item {
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
}
</style>

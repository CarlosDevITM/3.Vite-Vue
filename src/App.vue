<template>
  <h1>Mi primera app con un componente independiente</h1>

  <squareCounter :value="5"></squareCounter>
</template>

<script lang="ts" setup>
import squareCounter from './components/SquareCounter.vue';
</script>

<style></style>

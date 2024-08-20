<template>
  <h1>Mi primera app con un componente independiente</h1>

  <squareCounter :value="5"></squareCounter>
  <squareCounterScript :value="5"></squareCounterScript>
</template>

<script lang="ts" setup>
import squareCounter from './components/SquareCounter.vue';
import squareCounterScript from './components/SquareCounterScript.vue';
</script>

<style></style>

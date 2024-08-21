<template>
  <h1>Mi primera app con un componente independiente</h1>

  <h1 className="text-3xl font-bold underline">Hello world!</h1>

  <squareCounter :value="5"></squareCounter>
  <squareCounterScript :value="5"></squareCounterScript>
  <squareCounterScriptSeparate :value="3"></squareCounterScriptSeparate>
</template>

<script lang="ts" setup>
import squareCounter from './components/SquareCounter.vue';
import squareCounterScript from './components/SquareCounterScript.vue';
import squareCounterScriptSeparate from './counterSeparate/SquareCounterScriptSeparate.vue';
</script>

<style></style>

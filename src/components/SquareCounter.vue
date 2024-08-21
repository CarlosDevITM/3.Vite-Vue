<!-- HTML-->
<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" v-on:click="increase">+1</button>
      <button class="btn" @click="decrease">-1</button>
    </div>
  </section>
</template>

<!-- CSS-->
<!-- Scoped: Es utilizado para segmentar los estilos de cada componente. Si tenemos, dos componentes ambos con un H1 y los usamos simultáneamente y queremos aplicar un estilo a todos los H1, este afectará tanto al primer como al segundo componente.
    Si se usa, se crea un Id para cada etiqueta, lo cual evita que otros estilos les afecten.-->
<style>
.btn scoped {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>

<!-- JS-->
<!-- TypeScript y el setup() de Vue.-->
<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  value: number;
}
const props = defineProps<Props>();

const counter = ref(props.value);

//Square H3
const squareCounter = computed(() => counter.value * counter.value);
//Buttons
const increase = () => (counter.value = counter.value + 1);
const decrease = () => (counter.value = counter.value - 1);
</script>

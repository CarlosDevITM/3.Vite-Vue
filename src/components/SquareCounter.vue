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
.btn {
  @apply hover:bg-red-600;
}
</style>

<!-- JS-->
<!-- TypeScript y el setup() de Vue.-->
<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
  value: number;
}
const props = defineProps<Props>();

const { counter, squareCounter, increase, decrease } = useCounter(props.value);
</script>

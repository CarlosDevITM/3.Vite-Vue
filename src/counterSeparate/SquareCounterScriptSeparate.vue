<!-- HTML-->
<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button v-on:click="increase">+1</button>
      <button @click="decrease">-1</button>
    </div>
  </section>
</template>

<!-- CSS-->
<!-- Scoped: Es utilizado para segmentar los estilos de cada componente. Si tenemos, dos componentes ambos con un H1 y los usamos simultáneamente y queremos aplicar un estilo a todos los H1, este afectará tanto al primer como al segundo componente.
    Si se usa, se crea un Id para cada etiqueta, lo cual evita que otros estilos les afecten.-->
<style scoped>
h1 {
  color: red;
}
</style>

<!-- JS-->
<!-- TypeScript y el setup() de Vue.-->
<script src="./SquareCounterScriptSeparate.ts" lang="ts"></script>

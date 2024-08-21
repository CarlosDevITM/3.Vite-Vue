<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <chatBubble :its-mine="true" message="Hola Mundo"></chatBubble>
      <chatBubble
        :its-mine="false"
        message="No"
        image="https://yesno.wtf/assets/no/15-7446b1035f784986609f456e15d30a5b.gif"
      ></chatBubble>
    </div>
  </div>
</template>

<script lang="ts" setup>
import chatBubble from './chatBubble.vue';
</script>

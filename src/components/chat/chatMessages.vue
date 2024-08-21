<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- <chatBubble :its-mine="true" message="Hola Mundo"></chatBubble> -->

      <!-- <chatBubble v-for="m in messages" :key="m.id" :="m"> </chatBubble> -->
      <chatBubble
        v-for="m in messages"
        :key="m.id"
        :itsMine="m.itsMine"
        :message="m.message"
        :image="m.image"
      ></chatBubble>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { chatMessageInterface } from '@/interfaces/chatMessageInterface';
import chatBubble from './chatBubble.vue';

interface Props {
  messages: chatMessageInterface[];
}
defineProps<Props>();
</script>

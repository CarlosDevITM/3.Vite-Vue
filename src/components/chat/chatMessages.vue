<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
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
import { ref, watch } from 'vue';

interface Props {
  messages: chatMessageInterface[];
}
const { messages } = defineProps<Props>();

const chatRef = ref<HTMLElement | null>(null);

watch(messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>

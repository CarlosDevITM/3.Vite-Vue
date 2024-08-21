<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!--Messages-->
    <chatMessages :messages="messages"></chatMessages>

    <!-- Message Box-->
    <messageBox></messageBox>
  </div>
</template>

<script lang="ts" setup>
import chatMessages from '@/components/chat/chatMessages.vue';
import messageBox from '@/components/chat/messageBox.vue';
import type { chatMessageInterface } from '@/interfaces/chatMessageInterface';
import { ref } from 'vue';

const messages = ref<chatMessageInterface[]>([
  {
    id: new Date().getDate(),
    message: 'Hola mundo',
    itsMine: true,
  },

  {
    id: new Date().getDate() + 1,
    message: 'Yes',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/15-7446b1035f784986609f456e15d30a5b.gif',
  },
]);
</script>

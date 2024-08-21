<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!--Messages-->
    <chatMessages :messages="messages"></chatMessages>

    <!-- Message Box-->
    <messageBox @send-message="onMessage($event)"></messageBox>
  </div>
</template>

<script lang="ts" setup>
import chatMessages from '@/components/chat/chatMessages.vue';
import messageBox from '@/components/chat/messageBox.vue';

import { useChat } from '@/composables/useChat';

const { onMessage, messages } = useChat();
</script>

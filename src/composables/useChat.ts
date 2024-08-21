import type { chatMessageInterface } from '@/interfaces/chatMessageInterface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<chatMessageInterface[]>([]);

  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });
  };
  return {
    //Properties
    messages,
    //Methods
    onMessage,
  };
};

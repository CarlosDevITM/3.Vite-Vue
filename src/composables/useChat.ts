import { sleep } from '@/helpers/sleep';
import type { chatMessageInterface } from '@/interfaces/chatMessageInterface';
import type { YesNoInterface } from '@/interfaces/yes-no-response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<chatMessageInterface[]>([]);

  const getItsResponse = async () => {
    const response = await fetch('https://yesno.wtf/api');

    const data = (await response.json()) as YesNoInterface;

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    //Evaluar si termina con un signo de interrogación.
    if (!text.endsWith('?')) return;

    await sleep(1.5);
    const { answer, image } = await getItsResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };
  return {
    //Properties
    messages,
    //Methods
    onMessage,
  };
};

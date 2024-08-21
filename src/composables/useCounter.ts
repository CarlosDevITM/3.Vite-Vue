import { computed, ref } from 'vue';

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue);

  //Square H3
  const squareCounter = computed(() => counter.value * counter.value);
  //Buttons
  const increase = () => (counter.value = counter.value + 1);
  const decrease = () => (counter.value = counter.value - 1);
  return {
    counter,
    squareCounter,
    increase,
    decrease,
  };
};

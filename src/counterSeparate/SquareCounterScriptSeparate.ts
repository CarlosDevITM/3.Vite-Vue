import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    //Square H3
    const squareCounter = computed(() => counter.value * counter.value);

    //Buttons
    const increase = () => (counter.value = counter.value + 1);
    const decrease = () => (counter.value = counter.value - 1);

    return {
      counter: counter,
      squareCounter: squareCounter,
      increase,
      decrease,
    };
  },
});

// import { ref } from 'vue';

// export default function useCounter(initialValue = 0) {
//   const count = ref(initialValue);

//   function increment() {
//     count.value++;
//   }

//   function decrement() {
//     count.value--;
//   }

//   function reset() {
//     count.value = 0;
//   }

//   function setValue(value) {
//     count.value = value;
//   }

//   return {
//     count,
//     increment,
//     decrement,
//     reset,
//     setValue
//   };
// }


import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useCounter() {
  const store = useStore();

  const count = computed(() => store.getters.count);

  const increment = () => {
    store.dispatch('increment');
  };

  const decrement = () => {
    store.dispatch('decrement');
  };

  const reset = () => {
    store.dispatch('reset');
  };

  const setValue = value => {
    store.dispatch('setValue', value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
}

import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    value: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    setValue(state) {
      state.count = state.value;
    },
    updateValue(state, value) {
      state.value = value;
    },
  },
  actions: {
    updateValue(context, value) {
      context.commit("updateValue", value);
    },
  },
  getters: {
    count: (state) => state.count,
    value: (state) => state.value,
  },
});

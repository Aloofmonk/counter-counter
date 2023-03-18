<template>
	<div class="counter">
		<h2>Count: {{ count }}</h2>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="reset">Reset</button>
		<input type="number" v-model.number="value" />
		<button @click="setValue(value)">Set Value</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
	setup() {
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
			store.dispatch('setValue', value)

		};
		const value = ref(0);

		return {
			count,
			increment,
			decrement,
			reset,
			setValue,
			value
		};
	}
}
</script>

<style scoped>
.counter {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
}

h2 {
	font-size: 48px;
}

button {
	font-size: 24px;
	padding: 10px 20px;
	margin: 0 10px;
}

input {
	font-size: 24px;
	padding: 10px;
	margin: 0 10px;
	width: 100px;
	text-align: center;
}
</style>

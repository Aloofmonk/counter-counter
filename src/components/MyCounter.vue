<template>
	<div class="counter">
		<input type="number" v-model.number="value" />
		<button @click="setValue(value)">Set Value</button>
		<h2>{{ count }}</h2>
		<div class="button-cont">
			<button @click="decrement">-</button>
			<button @click="reset">Reset</button>
			<button @click="increment">+</button>
		</div>
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.counter {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	height: 50vh;
}

h2 {
	font-size: 60px;
}

button {
	font-size: 24px;
	padding: 10px 20px;
	margin: 0 10px;
	border-radius: 8px;
	background: rgb(188, 183, 183);
}

button:active {
	background: grey;
}

input {
	font-size: 24px;
	padding: 10px 35px;
	margin: 0 10px;
	width: 100px;
	text-align: center;
	margin-bottom: 15px;
	border-radius: 15px;
}
</style>

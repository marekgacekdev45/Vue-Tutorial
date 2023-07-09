<template>
	<div class="home">
		<h1>home</h1>
		<p ref="p">My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
		<button @click="handleClick">click</button>
		<button @click="age++">click</button>
		<input type="text" v-model="name" />
		<button @click="updateNinjaOne">update NinjaOne</button>

		<h2>Reactive</h2>
		<p>{{ ninjaTwo.name }}</p>
		<p>{{ ninjaTwo.age }}</p>
		<button @click="updateNinjaTwo">update ninja two</button>

    <h2>names</h2>
    <input type="text" v-model="search">
    <p>search term = {{ search }}</p>
    <div v-for="item in matchingNames " :key="item">{{ item }}</div>
    <button @click="handleStop">stop watching</button>
	</div>
</template>

<script>
import { reactive, ref,computed, watch, watchEffect} from 'vue'

export default {
	name: 'HomeView',
	setup(props) {
		const p = ref(null)
		console.log(p, p.value)

		// let name = 'Mario'
		const name = ref('Mario')
		const age = ref(32)

		const ninjaOne = ref({
			name: 'Lee',
			age: 1,
		})
		const ninjaTwo = reactive({ name: 'luigi', age: 35 })

//computed
const search = ref('')
		const names = ref(['alfred', 'tomek', 'dawidek', 'jarek', 'grześ'])

   const stopWatch = watch(search,()=> {
      console.log('watch function ran')
    })

   const stopWatchEffect = watchEffect(()=>{console.log('watchEffect')})

    const matchingNames = computed(() => {
  return names.value.filter(name => name.includes(search.value))
});

		const handleClick = () => {
			console.log(p, p.value)
			p.value.classList.add('test')
			// p.value.textContent ='siemka'
			name.value = 'paweł'
		}

		const updateNinjaOne = () => {
			ninjaOne.value.name = 'Bruce'
			ninjaOne.value.age = 100
		}
		const updateNinjaTwo = () => {
			ninjaTwo.name = 'Kung Lao'
			ninjaTwo.age = 45
		}
    const handleStop =() => {
stopWatch()
stopWatchEffect()
    }

		return {
			name: name,
			age,
			handleClick,
			updateNinjaOne,
			p,
			ninjaOne,
			ninjaTwo,
			updateNinjaTwo,
      names,
      search,
      matchingNames,
      handleStop
      
		}
	},
	// created() {
	//   console.log('created')
	// },
	// mounted() {
	//   console.log('munted')
	// },
}
</script>

<style>
.test {
	color: red;
}
</style>

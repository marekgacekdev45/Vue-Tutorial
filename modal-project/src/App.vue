<template>
	<div>
		<h1>{{ title }}</h1>
		<teleport to=".modals" v-if="showModal">
			<ModalComponent :header="header" theme="sale" @close="toggleModal">
				<template v-slot:links>
					<div class="actions">
						<a href="#">sign in</a>
						<a href="#">register</a>
					</div>
				</template>
				<p>
					treść modala Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti maiores repudiandae
					labore, atque delectus eius enim quia exercitationem voluptates?
				</p>
			</ModalComponent>
		</teleport>
		<teleport to=".modals" v-if="showModal2">
			<ModalComponent @close="toggleModal2"><p>
					treść modala
				</p> </ModalComponent>
		</teleport>
		<button @click="toggleModal">Open</button>
		<button @click="toggleModal2">Open Modal 2</button>
	</div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'

export default {
	name: 'App',
	components: {
		ModalComponent,
	},
	data() {
		return {
			title: 'jakiś tytuł',
			header: 'Unikatowy modal',
			// text: 'treść modala',
			showModal: false,
			showModal2: false,
		}
	},
	methods: {
		handleClick() {
			console.log(this.$refs.name)
			const input = this.$refs.name
			input.classList.add('active')
			input.focus()
		},
		toggleModal() {
			this.showModal = !this.showModal
		},
		toggleModal2() {
			this.showModal2 = !this.showModal2
		},
	},
}
</script>

<style>
#app, .modals {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
h1 {
	border-bottom: 1px solid rebeccapurple;
	padding-bottom: 10px;
	display: inline-block;
}
</style>

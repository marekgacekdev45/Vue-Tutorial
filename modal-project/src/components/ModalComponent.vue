<template>
	<div class="backdrop" @click.self="closeModal">
		<div class="modal" :class="{ sale: theme === 'sale' }">
			<h1>{{ header }}</h1>
			<slot>default content</slot>
				<slot name="links"></slot>
			
			<button @click="closeModal" >closeModal</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['header', 'text', 'theme'],
	methods: {
		closeModal() {
			this.$emit('close')
		},
	},
}
</script>

<style >
.modal {
	width: 400px;
	padding: 20px;
	margin: 100px auto;
	background: white;
	border-radius: 10px;
}
.backdrop {
	top: 0;
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
}
.modal .sale {
	background-color: yellowgreen;
	color: white;
}
.modal .sale h1 {
	color: darkblue;
}
.modal h1 {
	color: turquoise;
	border: none;
}
.modal .actions{
	text-align: center;
	margin: 30px 0 10px 0;
	
}
.modal .actions a{
	color:#333;
	padding: 8px;
	border: 1px solid red;
	border-radius: 4px;
	text-decoration: none;
	margin: 10px;
}
</style>

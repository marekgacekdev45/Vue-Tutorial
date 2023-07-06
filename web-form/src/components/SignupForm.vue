<template>
	<div>
		<form>
			<label for="">Email</label>
			<input type="email" required v-model="email" />
			<label for="">Password</label>
			<input type="password" required v-model="password" />

			<label for="">Role</label>
			<select name="" id="" v-model="role">
				<option value="developer">Web Developer</option>
				<option value="designer">Web Designer</option>
			</select>

			<button @click="submit">submit</button>
		</form>
		<p>email: {{ email }}</p>
		<p>password:{{ password }}</p>
        <p>role:{{ role }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: 'edek',
			password: '',
            role:'',
		}
	},
	methods: {
		submit() {
			console.log(this.email, this.password)
		},
	},
}
</script>

<style>
form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
button {
	margin-top: 1em;
}
</style>

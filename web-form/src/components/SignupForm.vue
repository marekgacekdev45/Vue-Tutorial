<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<label for="">Email</label>
			<input type="email" required v-model="email" />
			<label for="">Password</label>
			<input type="password" required v-model="password" />
			<p v-if="passwordErrors">{{ passwordErrors }}</p>

			<label for="">Role</label>
			<select name="" id="" v-model="role">
				<option value="developer">Web Developer</option>
				<option value="designer">Web Designer</option>
			</select>

			<label for="">skills</label>
			<input type="text" v-model="tempSkill" @keyup="addSkill" />
			<div v-for="skill in skills" :key="skill">
				<p @click="deleteSkill(skill)">{{ skill }}</p>
			</div>

			<div class="terms">
				<input type="checkbox" name="" id="" v-model="terms" required />
				<label for="">accept</label>
			</div>

			<div>
				<input type="checkbox" name="" id="" v-model="names" value="rafął" />
				<label for="">Rafał</label>
			</div>
			<div>
				<input type="checkbox" name="" id="" v-model="names" value="edmund" />
				<label for="">Edmund</label>
			</div>
			<div>
				<input type="checkbox" name="" id="" v-model="names" value="horacy" />
				<label for="">Horacy</label>
			</div>

			<button>submit</button>
		</form>
		<p>email: {{ email }}</p>
		<p>password:{{ password }}</p>
		<p>role:{{ role }}</p>
		<p>terms: {{ terms }}</p>
		<p>names:{{ names }}</p>
		<p>tempSkill:{{ tempSkill }}</p>
		<p>Skills:{{ skills }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: 'edek',
			password: '',
			role: '',
			terms: false,
			names: [],
			tempSkill: '',
			skills: [],
			passwordErrors: '',
		}
	},
	methods: {
		handleSubmit() {
			this.passwordErrors = this.password.length > 5 ? '' : 'password is to short'
			
			if(!this.passwordErrors){
				console.log('form submit')

			}
		},
		addSkill(e) {
			if (e.key === ',' && this.tempSkill) {
				if (!this.skills.includes(this.tempSkill)) {
					this.skills.push(this.tempSkill)
					this.tempSkill = ''
				}
			}
		},
		deleteSkill(skill) {
			this.skills = this.skills.filter(item => {
				return skill !== item
			})
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

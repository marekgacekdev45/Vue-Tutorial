<template>
	<div v-if="job">
		<h1>JobDetails Page</h1>
		<p>the job id is {{ id }}</p>
        <h2>{{job.title}}</h2>
        <p>{{ job.details }}</p>
	</div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
            job:null
        }
	},
	mounted() {
		fetch('http://localhost:3000/jobs/' + this.id)
			.then(res => res.json())
			.then(data => (this.job = data))
			.catch(err => console.log(err.message))
	},
	// data() {
	//     return {
	//         id:this.$route.params.id
	//     }
	// },
}
</script>

<style></style>

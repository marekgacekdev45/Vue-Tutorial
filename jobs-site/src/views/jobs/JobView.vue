<template>
	<div>
		<h1>Jobs</h1>
		<div v-if="jobs.length >= 1">
			<div v-for="job in jobs" :key="job.id">
				<router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
					<h2>{{ job.title }}</h2>
				</router-link>
			</div>
		</div>
		<div v-else>
			<p>loading...</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			jobs: [
				// { id: 1, title: 'designer', details: 'lorem' },
				// { id: 2, title: 'frontend', details: 'lorem' },
				// { id: 3, title: 'backend', details: 'lorem' },
			],
		}
	},
	mounted() {
		fetch('http://localhost:3000/jobs')
			.then(res => res.json())
			.then(data => (this.jobs = data))
			.catch(err => console.log(err.message))
	},
}
</script>

<style></style>

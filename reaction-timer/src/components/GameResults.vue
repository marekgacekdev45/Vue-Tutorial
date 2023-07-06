<template>
	<div>
		<p>Reaction Time ={{ score }} ms</p>
		<p>Rank = {{ rank }}</p>
	</div>
</template>

<script>
export default {
	props: ['score'],
	data() {
		return {
			rank: null,
		}
	},
	mounted() {
		if (this.score < 250) {
			this.rank = 1
		} else if (this.score > 251 && this.score < 500) {
			this.rank = 2
		} else {
			this.rank = 3
		}
	},
}
</script>

<style></style>

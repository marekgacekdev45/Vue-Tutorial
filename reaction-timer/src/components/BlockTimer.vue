<template>
	<div class="block" v-if="showBlock" @click="stopCountdown">
		click me
		<p>{{ delay }}</p>
	</div>
</template>

<script>
export default {
	props: ['delay'],
	data() {
		return {
			showBlock: false,
			timer: null,
			reactionTime: 0,
		}
	},
	mounted() {
		setTimeout(() => {
			this.showBlock = true
			this.startCountdown()
			console.log(this.delay)
		}, this.delay)
	},
	methods: {
		startCountdown() {
			this.timer = setInterval(() => {
				this.reactionTime += 10
			}, 10)
		},
		stopCountdown() {
      clearInterval(this.timer)
      this.$emit('end',this.reactionTime)
    },
	},
}
</script>

<style>
.block {
	width: 400px;
	border-radius: 20px;
	background-color: yellow;
	color: black;
	text-align: center;
	padding: 100px 0;
	margin: 40px auto;
}
</style>

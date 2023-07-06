<template>
	<div>
		<h1>test</h1>
		<button @click="startGame" :disabled="isPlaying">Start</button>
		<BlockTimer v-if="isPlaying" :delay="delay" @end="endGame"/>
		<GameResults v-if="showResults" :score="score"/>
	</div>
</template>

<script>
import BlockTimer from './components/BlockTimer.vue'
import GameResults from './components/GameResults.vue'
export default {
	name: 'App',
	components: { BlockTimer,GameResults },
	data() {
		return {
			isPlaying: false,
			delay: null,
			score:null,
			showResults:false,
		}
	},

	methods: {
		startGame() {
			this.showResults = false
			this.isPlaying = true
			this.delay = 2000 + Math.random() * 5000
		},
		endGame(reactionTime){
			this.showResults=true
			this.score = reactionTime
			this.isPlaying = false
		}
		
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

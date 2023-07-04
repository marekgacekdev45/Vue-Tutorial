const app = Vue.createApp({
	//data, functions
	// template:'<h2>jestem w template</h2>'
	data() {
		return {
            url:'https://gorskastrona.pl',
			showBooks: true,
			title: 'jakiś tytuł',
			author: 'Waldek Kiepski',
			age: '33',
			x: 0,
			y: 0,
			books: [
				{
					title: 'Wiedźmin',
					author: 'Andrzej',
                    img:'assets/1.jpg',
                    isFav:true
				},
				{
					title: 'Potop',
					author: 'Henryk',
                    img:'assets/2.jpg',
                    isFav:false
				},
				{
					title: 'Dziady',
					author: 'Adam',
                    img:'assets/3.jpg',
                    isFav:true
				},
			],
		}
	},
	methods: {
		changeTitle(title) {
			// this.title = 'zmiana tytułu'
			this.title = title
		},
		toogleShowBooks() {
			this.showBooks = !this.showBooks
		},
		handleEvents(e, data) {
			console.log(e, e.type)
			if (data) {
				console.log(data)
			}
		},
		handleMouseMove(e) {
			this.x = e.offsetX
			this.y = e.offsetY
		},
        favToggle(book){
           book.isFav = !book.isFav
            console.log('ok')
        }
	},
    computed:{
        filteredBooks(){
            return this.books.filter((book)=> book.isFav)
        }
    }
})

app.mount('#app')

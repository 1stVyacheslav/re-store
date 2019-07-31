
export default class BooktoreService {

	data = [
		{
			id: 1,
			title: 'Flowers for Algernon',
			author: 'Daniel Keyes',
			price: 10,
			coverImage: 'https://upload.wikimedia.org/wikipedia/en/e/ea/FlowersForAlgernon.jpg'
		},
		{
			id: 2,
			title: 'Altered Carbon',
			author: 'Richard K. Morgan',
			price: 20,
			coverImage: 'https://upload.wikimedia.org/wikipedia/en/7/79/Altered_Carbon_cover_1_%28Amazon%29.jpg'
		},
		{
			id: 3,
			title: 'Roadside Picnic',
			author: 'Arkady and Boris Strugatsky',
			price: 200,
			coverImage: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Roadside-picnic-macmillan-cover.jpg'
		}
	]

	getBooks() {
		return new Promise( (resolve, reject) => {
			setTimeout(() => {
				
				if (Math.random() > 1) {
					reject(new Error('Something bad happend!'))
				} else {
					resolve(this.data)
				}
				
			}, 1000)
		} )
	}
	
}
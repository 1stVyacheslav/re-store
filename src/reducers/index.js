
const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: [],
	orderTotal: 200
}

export default function reducer(state = initialState, action) {

	// console.log(action.type)

	switch (action.type) {

		case 'FETCH_BOOKS_REQUEST':
			return {
				...state,
				books: [],
				loading: true,
				error: null
			};

		case 'FETCH_BOOKS_SUCCESS':
			return {
				...state,
				books: action.payload,
				loading: false,
				error: null
			}
		
		case 'FETCH_BOOKS_FAILURE':
			return {
				...state,
				books: [],
				loading: false,
				error: action.payload
			}

		case 'BOOK_ADDED_TO_CART':
			const { books, cartItems } = state,
						bookId = 				action.payload,
						selectedBook = 	books.find( book => bookId === book.id ),				
						item = 					cartItems.find(book => bookId === book.id),
						idx =						cartItems.indexOf(item);
			
			let newItem = updateItem(selectedBook, item);
					
			return {
				...state,
				cartItems: updateCartItems(cartItems, newItem, idx)
			}

		default:
			return state
	}
}

function updateCartItems(cartItems, item, index) {

	let newCartItems;
	
	if (index < 0) {
		newCartItems = [...cartItems, item]
		return newCartItems
	}

	 newCartItems = [
		...cartItems.slice(0, index),
		item,
		...cartItems.slice(index + 1)
	]

	return newCartItems
}

function updateItem(book, item = {}) {

	const {id = book.id, title = book.title, cost = 0, count = 0} = item;
	const newItem = {
		id,
		title,
		count: count + 1,
		cost: cost + book.price				
	}

	return newItem
}
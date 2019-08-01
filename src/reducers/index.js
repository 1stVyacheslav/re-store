
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
			return updateOrder(state, 1, action.payload)
				
				

		case 'BOOK_REMOVED_FROM_CART':
			return updateOrder(state, -1, action.payload)
		
		case 'ALL_BOOKS_DEMOVED_FROM_CART':
			const item = state.cartItems.find(book => action.payload === book.id)
			return updateOrder(state, -item.count, action.payload)

		default:
			return state
	}
}

function updateOrder(state, quantity, id) {

	const {books, cartItems} = state;
	
	const selectedBook = 	books.find( book => id === book.id ),				
				item = 					cartItems.find(book => id === book.id),
				idx =	cartItems.indexOf(item),
				newItem = updateItem(selectedBook, item, quantity);
	
	return {
		...state,
		cartItems: updateCartItems(cartItems, newItem, idx)
	}
}

function updateCartItems(cartItems, item, index) {

	if  (item.count === 0 ) {
		return [
			...cartItems.slice(0, index),
			...cartItems.slice(index + 1)
		]
	}
	
	if (index < 0) {
		
		return [...cartItems, item]
	}

	return [
		...cartItems.slice(0, index),
		item,
		...cartItems.slice(index + 1)
	]
}

function updateItem(book, item = {}, quantity) {

	const {id = book.id, title = book.title, cost = 0, count = 0} = item;
	const newItem = {
		id,
		title,
		count: count + quantity,
		cost: cost + quantity*book.price				
	}

	return newItem
}
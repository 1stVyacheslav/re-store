// const initialShoppingCartState = {
// 	cartItems: [],
// 	orderTotal: 0
// }

export default function shoppingCartReducer(state, action) {

	if (state === undefined) {
		state.shoppingCart = {
			cartItems: [],
			orderTotal: 0
		}
	}

	switch (action.type) {
		case 'BOOK_ADDED_TO_CART':
			return updateOrder(state, 1, action.payload)				

		case 'BOOK_REMOVED_FROM_CART':
			return updateOrder(state, -1, action.payload)
		
		case 'ALL_BOOKS_DEMOVED_FROM_CART':
			const item = state.shoppingCart.cartItems.find(book => action.payload === book.id)
			return updateOrder(state, -item.count, action.payload)

		default:
			return state.shoppingCart
	}
}

function updateOrder(state, quantity, id) {

	const {bookList: {books}, shoppingCart: {cartItems}} = state;
	
	const selectedBook = 	books.find( book => id === book.id ),				
				item = 					cartItems.find(book => id === book.id),
				idx =	cartItems.indexOf(item),
				newItem = updateItem(selectedBook, item, quantity);
	
	return {
			cartItems: updateCartItems(cartItems, newItem, idx),
			orderTotal: 0
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
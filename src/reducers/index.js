
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
			let	newCartItems = cartItems.slice()
									
			if (idx >= 0) {

				const newItem = {
					...item,
					count: item.count + 1,
					cost: item.cost + selectedBook.price
				}
				newCartItems = [
					...newCartItems.slice(0, idx),
					newItem,
					...newCartItems.slice(idx + 1)
				];

			} else {
				
				const	newItem = {
					id: selectedBook.id,
					title: selectedBook.title,
					count: 1,
					cost: selectedBook.price				
				}
				newCartItems = [...newCartItems, newItem]

			}
			return {
				...state,
				cartItems: newCartItems
			}

		default:
			return state
	}
}
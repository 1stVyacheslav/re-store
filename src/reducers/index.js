import bookListReducer from './book-list-reducer';
import shoppingCartReducer from './shopping-cart-reducer';

const initialState = {
	bookList: {
		books: [],
		loading: true,
		error: null
	},
	shoppingCart: {
		cartItems: [],
		orderTotal: 0
	}

}

export default function reducer(state = initialState, action) {

	switch (action.type) {

		default:
				return {
					bookList: bookListReducer(state, action),
					shoppingCart: shoppingCartReducer(state, action)
				};
	}
}
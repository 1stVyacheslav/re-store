
const initialState = {
	books: [],
	loading: true
}

export default function reducer(state = initialState, action) {

	switch (action.type) {

		case 'BOOKS_REQUESTED':
			return initialState;

		case 'BOOKS_LOADED':
			return {
				books: action.payload,
				loading: false
			}
			
		default:
			return state
	}
}
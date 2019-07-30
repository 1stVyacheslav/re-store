
const initialState = {
	books: [],
	loading: true,
	error: null
}

export default function reducer(state = initialState, action) {

	switch (action.type) {

		case 'FETCH_BOOKS_REQUEST':
			return initialState;

		case 'FETCH_BOOKS_SUCCESS':
			return {
				books: action.payload,
				loading: false,
				error: null
			}
		
		case 'FETCH_BOOKS_FAILURE':
			return {
				books: [],
				loading: false,
				error: action.payload
			}

		default:
			return state
	}
}
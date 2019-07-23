
const initialState = {
	books: []
}

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case 'BOOKS_LOADED':
			return {
				books: action.payload
			}
		default:
			return state
	}
}
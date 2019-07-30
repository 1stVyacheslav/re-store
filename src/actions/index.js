function booksRequested() {
	return {
		type: 'FETCH_BOOKS_REQUEST'
	}
}

function booksLoaded(newBooks) {
	return {
		type: 		'FETCH_BOOKS_SUCCESS',
		payload:	newBooks
	}
}

function booksError(error) {
	return {
		type: 	'FETCH_BOOKS_FAILURE',
		payload: error
	}
}

function fetchBooks( dispatch ,bookstoreService ) {
	return function() {
		dispatch(booksRequested()) // state.dispatch({type:'BOOKS_REQUESTED'})
			bookstoreService.getBooks()
				//state.dispatch({type:'BOOKS_LOADED', payload: data})
				.then( (data) => dispatch(booksLoaded(data)) )
				//state.dispatch({type:'BOOKS_ERROR', payload: error})
				.catch( (error) => dispatch(booksError(error)) )	
	}
}

export { fetchBooks }
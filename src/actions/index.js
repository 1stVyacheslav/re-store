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

function bookAddedToCart(id) {
	return {
		type: 	'BOOK_ADDED_TO_CART',
		payload: id
	}
}

function fetchBooks( dispatch ,bookstoreService ) {
	return function() {
		dispatch(booksRequested())
			bookstoreService.getBooks()				
				.then( (data) => dispatch(booksLoaded(data)) )				
				.catch( (error) => dispatch(booksError(error)) )	
	}
}

export { fetchBooks, bookAddedToCart }
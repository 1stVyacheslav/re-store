
function booksLoaded(newBooks) {
	return {
		type: 		'BOOKS_LOADED',
		payload:	newBooks
	}
}

function booksRequested() {
	return {
		type: 'BOOKS_REQUESTED'
	}
}

export {
	booksLoaded,
	booksRequested
}
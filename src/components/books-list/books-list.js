import React, { Component } from 'react';
import BookItem from '../book-item/';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';

function BookList( {books, onAddedToCart} ) {

	return (		
			<ul className='book-list'>					
				{books.map( (item) => {
					return (
					<li key={item.id}>
						<BookItem book={item} onAddedToCart={ () => onAddedToCart(item.id) }/>
					</li>
					)
				})}
			</ul>		
	)
}

class BooksListContainer extends Component {

	componentDidMount() {

		this.props.fetchBooks()

	}

	render() {

		const { books, loading, error, onAddedToCart } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		return <BookList books={books} onAddedToCart={ (id) => onAddedToCart(id) } />

	}
}

const mapStateToProps = ( { bookList: { books, loading, error } } ) => {
	return {books, loading, error}
}

const mapDispathToProps = (dispatch, { bookstoreService }) => {
		return {
			fetchBooks: fetchBooks( dispatch ,bookstoreService ),
			onAddedToCart: (id) => dispatch(bookAddedToCart(id))
		}	
	}

export default compose(
		withBookstoreService(),
		connect(mapStateToProps, mapDispathToProps)
	)(BooksListContainer)
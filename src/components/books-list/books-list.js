import React, { Component } from 'react';
import BookItem from '../book-item/';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';

class BooksList extends Component {

	componentDidMount() {

		this.props.fetchBooks()

	}

	render() {

		const { books, loading, error } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		const booksList = books.map( (item) => {
			return (
				<li key={item.id}><BookItem book={item} /></li>
			)
		})

		return (
			
				<ul className='book-list'>					
					{booksList}
				</ul>
			
		)
	}
}

const mapStateToProps = ( { books, loading, error } ) => {
	return {books, loading, error}
}

const mapDispathToProps = (dispatch, { bookstoreService }) => {
	return {
		fetchBooks: () => {
			dispatch(booksRequested()) // state.dispatch({type:'BOOKS_REQUESTED'})
			bookstoreService.getBooks()
				//state.dispatch({type:'BOOKS_LOADED', payload: data})
				.then( (data) => dispatch(booksLoaded(data)) )
				//state.dispatch({type:'BOOKS_ERROR', payload: error})
				.catch( (error) => dispatch(booksError(error)) )	
		}
	}
}



export default compose(
		withBookstoreService(),
		connect(mapStateToProps, mapDispathToProps)
	)(BooksList)
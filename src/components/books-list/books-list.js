import React, { Component } from 'react';
import BookItem from '../book-item/';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
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

const mapDispathToProps = 
	(dispatch, { bookstoreService }) => ({fetchBooks: fetchBooks( dispatch ,bookstoreService )})	





export default compose(
		withBookstoreService(),
		connect(mapStateToProps, mapDispathToProps)
	)(BooksList)
import React, { Component } from 'react';
import BookItem from '../book-item/';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';

class BooksList extends Component {

	componentDidMount() {
		
		const { bookstoreService, booksLoaded, booksRequested } = this.props;

		booksRequested()
		bookstoreService.getBooks().then((data) => booksLoaded(data));			

	}

	render() {

		const { books, loading } = this.props;

		if (loading) {
			return <Spinner />
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

const mapStateToProps = ( { books, loading } ) => {
	return {books, loading}
}

const mapDispathToProps = { booksLoaded, booksRequested }

export default compose(
		withBookstoreService(),
		connect(mapStateToProps, mapDispathToProps)
	)(BooksList)
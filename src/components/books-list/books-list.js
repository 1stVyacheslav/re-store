import React, { Component } from 'react';
import BookItem from '../book-item/';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';

class BooksList extends Component {

	componentDidMount() {
		
		const { bookstoreService, booksLoaded } = this.props;

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

const mapDispathToProps = { booksLoaded }

export default compose(
		withBookstoreService(),
		connect(mapStateToProps, mapDispathToProps)
	)(BooksList)
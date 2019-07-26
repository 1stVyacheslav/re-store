import React, { Component } from 'react';
import BookItem from '../book-item/';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';

class BooksList extends Component {

	componentDidMount() {
		//receive data
		const { bookstoreService } = this.props;
		const data = bookstoreService.getBooks();
		//dispatch action to state
		this.props.booksLoaded( data );

	}

	render() {

		const { books } = this.props;

		const booksList = books.map( (item) => {
			return (
				<li key={item.id}><BookItem book={item} /></li>
			)
		})

		return (
			<div>Books List:
				<ul>					
					{booksList}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ( { books } ) => {
	return {books}
}

const mapDispathToProps = { booksLoaded }

export default compose(
		withBookstoreService(),
		connect(mapStateToProps, mapDispathToProps)
	)(BooksList)

// withBookstoreService()(
// 	connect(mapStateToProps, mapDispathToProps)(BooksList)
// ) ;
import React, { Component } from 'react';
import BookItem from '../book-item/';

import './books-list.css';

export default class BooksList extends Component {

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

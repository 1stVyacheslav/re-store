import React from 'react';
import BookList from '../books-list/';

export default function HomePage() {

	const testBooks = [
		{
			id: 1,
			title: 'test_1',
			author: 'unknown'
		},
		{
			id: 2,
			title: 'test_2',
			author: 'another unknown'
		}
	]

	return (
		<React.Fragment>
			<h2>Home Page</h2>
			<BookList books={testBooks} />
		</React.Fragment>

	)
	
}
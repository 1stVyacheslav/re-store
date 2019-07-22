import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

function withBookstoreService(Component) {
	return (props) => {
		return (
			<BookstoreServiceConsumer>
				(bookstoreService) => <Component {...props} bookstoreService />
			</BookstoreServiceConsumer>
		)
	}
}

export { withBookstoreService };
import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

function withBookstoreService() {
	return function(Component) {
		return (props) => {
			return (
				<BookstoreServiceConsumer>
					{
						(bookstoreService) => {
							return <Component {...props} bookstoreService={bookstoreService} />
						}
					}				
				</BookstoreServiceConsumer>
			)
		}
	}

}

export { withBookstoreService };
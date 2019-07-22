import React from 'react';

import './app.css';
import BooktoreService from '../../services/bookstore-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { BookstoreServiceProvider } from '../bookstore-service-context/bookstore-service-context';

const App = () => {
	return (
			<div className='jumbotron text-cemter'>
				<BookstoreServiceProvider service={new BooktoreService()}>
					<Spinner />
					<ErrorIndicator />
				</BookstoreServiceProvider>

			</div>
		)
}

export default App;
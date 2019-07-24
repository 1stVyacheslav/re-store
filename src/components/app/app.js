import React from 'react';

import './app.css';

import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';
// import ErrorIndicator from '../error-indicator/error-indicator';


const App = ( { bookstoreService } ) => {

	console.log(bookstoreService.getBooks())

	return (
			<div className='jumbotron text-cemter'>
				<Spinner />
			</div>
		)
}

export default withBookstoreService(App);
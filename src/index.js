import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/';

import store from './store';

// console.log('Sic parvis magna')

const bookstoreService = new BookstoreService();

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
	 <Provider store={store}>
		 <ErrorBoundry>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>	

					 <App />				 

				</Router>
			</BookstoreServiceProvider>
		 </ErrorBoundry>
	 </Provider>,
	document.getElementById('root')
)





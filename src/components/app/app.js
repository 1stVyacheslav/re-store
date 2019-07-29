import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header/shop-header';


const App = () => {

	

	return (
			<main role='main' className='container'>

				<ShopHeader numItems={2} total={200}/>

				{/* <Link to='/' className='btn btn-primary mr-3'>Home Page</Link>
				<Link to='/cart' className='btn btn-primary mr-3'>Cart Page</Link>
				<Link to='/spinner' className='btn btn-primary mr-3'>spinner</Link>
				<Link to='/error' className='btn btn-primary mr-3'>error</Link>				 */}

				<Switch>

					<Route path='/' exact component={HomePage}/>
					<Route path='/spinner' component={Spinner} />
					<Route path='/error' component={ErrorIndicator} />
					<Route path='/cart' exact component={CartPage}/>

				</Switch>		
				
			</main>
		)
}

export default App;
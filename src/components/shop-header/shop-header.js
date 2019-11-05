import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './shop-header.css';

const ShopHeader = ( { items, total } ) => {

	console.log(items)

	return (
		<header className="shop-header row">
			<Link to='/' className='logo text-dark'>ReStore</Link>
			<Link to='/cart' className='shopping-cart'>
				<i className='cart-icon fa fa-shopping-cart' />
				{items.length} items (${total})
			</Link>
		</header>
	)
}

function mapStateToProps( { shoppingCart: { cartItems, orderTotal } } ) {
	return {
		items: cartItems,
		total: orderTotal
	}
}

export default connect(mapStateToProps)(ShopHeader);
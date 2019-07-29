import React from 'react';

import './shop-header.css';

const ShopHeader = ( { numItems, total } ) => {

	return (
		<header className="shop-header row">
			<div href='#' className='logo text-dark'>ReStore</div>
			<div className='shopping-cart'>
				<i className='cart-icon fa fa-shopping-cart' />
				{numItems} items (${total})
			</div>
		</header>
	)
}

export default ShopHeader;
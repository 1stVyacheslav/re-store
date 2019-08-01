import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, AllBooksRemovedFromCart } from '../../actions';

import './shopping-cart-table.css';

function ShoppingCartTable( {items, total, onIncrease, onDecrease, onDelete} ) {

	const renderRow = (item, idx) => {

		const { title, id, count, cost } = item;

		return (
					<tr key={id}>
						<td>{ idx + 1 }</td>
						<td>{ title }</td>
						<td>{ count }</td>
						<td>${ cost }</td>
							<td>
								<button className="btn btn-outline-danger btn-sm float-right" onClick={ () => onDelete(id) }>
									<i className='fa fa-trash-o' />
								</button>
								<button className="btn btn-outline-success btn-sm float-right" onClick={ () => onIncrease(id) } >
									<i className='fa fa-plus-circle' />
								</button>
								<button className="btn btn-outline-warning btn-sm float-right" onClick={ () => onDecrease(id) } >
									<i className='fa fa-minus-circle' />
								</button>
						</td>
					</tr>
					)
		}	
	

	return (
		<div className='shopping-cart-table'>

			<h2>Your Order</h2>

			<table className='table'>
				
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Cost</th>
						<th className='float-right'>Action</th>
					</tr>
				</thead>

				<tbody>					
					
					{ items.map(renderRow) }
									
				</tbody>

			</table>
			
			<div className="total">Total: ${total}</div>

		</div>
	)
}

function mapStateToProps( { cartItems, orderTotal } ) {
	return {
		items: cartItems,
		total: orderTotal
	}
}

const mapDispatchToProps = {
	
		onDelete: AllBooksRemovedFromCart,
		onIncrease: bookAddedToCart,
		onDecrease: bookRemovedFromCart
	
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
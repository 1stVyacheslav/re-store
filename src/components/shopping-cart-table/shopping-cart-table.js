import React from 'react';

import './shopping-cart-table.css';

export default function ShoppingCartTable() {
	return (
		<div className='shopping-cart-table'>

			<h2>Your Order</h2>

			<table className='table'>
				
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th className='float-right'>Action</th>
					</tr>
				</thead>

				<tbody>					
					<tr>
						<td>1</td>
						<td>Flowers for Algernon</td>
						<td>1</td>
						<td>$9.99</td>
						<td>
							<button className="btn btn-outline-danger btn-sm float-right">
								<i className='fa fa-trash-o' />
							</button>
							<button className="btn btn-outline-success btn-sm float-right">
								<i className='fa fa-plus-circle' />
							</button>
							<button className="btn btn-outline-warning btn-sm float-right">
								<i className='fa fa-minus-circle' />
							</button>
						</td>
					</tr>					
				</tbody>

			</table>
			
			<div className="total">Total: $200</div>

		</div>
	)
}
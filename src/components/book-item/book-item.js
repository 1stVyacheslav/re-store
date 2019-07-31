import React from 'react';

import './book-item.css';

export default function BookItem( { book, onAddedToCart } ) {

	
	const { title, author, price, coverImage } = book;

	return (
		<div className='book-list-item'>

			<div className='book-cover'>
				<img src={coverImage}	alt='cover'	/>		
			</div>
			
			<div className='book-details'>
				<button type='button' className='book-title btn btn-link'>{title}</button>
				<div className='book-author'>{author}</div>
				<div className='book-price'>${price}</div>
				<button 
					type='button' 
					className='btn btn-info add-to-cart'
					onClick={ () => onAddedToCart() }
				>
					Add to cart
				</button>
			</div>

		</div>
	)

}

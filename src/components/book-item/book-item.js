import React from 'react';

import './book-item.css';

export default function BookItem( { book } ) {

	
	const { title, author } = book;

	return (
		<React.Fragment>
			<span className='mr-3'>{title}</span>
			<span className='mr-3'>{author}</span>
		</React.Fragment>
	)

}

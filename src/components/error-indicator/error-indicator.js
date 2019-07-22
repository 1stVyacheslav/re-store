import React from 'react';

import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {

	return (
		<div className='error-indicator text-center'>
			<img className='icon' src={icon} alt='error'/>
			<h5>Something gone wrong!</h5>
			<h5>But we try to repair it!</h5>
		</div>
	)
}

export default ErrorIndicator;
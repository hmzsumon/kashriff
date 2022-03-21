import React from 'react';

const Spinner = () => {
	return (
		<div className='text-center spinner-wrapper'>
			<div
				className='spinner-border text-warning'
				role='status'
				style={{ width: '3rem', height: '3rem' }}
			>
				<span className='sr-only'></span>
			</div>
		</div>
	);
};

export default Spinner;

import React from 'react';

const Map = () => {
	return (
		<>
			<div className='google-map'>
				<div className='embed-responsive embed-responsive-21by9'>
					<iframe
						className='embed-responsive-item'
						title='location title'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.435607446184!2d90.400905314257!3d23.87416728995541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c56439812631%3A0x91f32296247ada1a!2sFREEFEEL!5e0!3m2!1sen!2sbd!4v1645724355757!5m2!1sen!2sbd'
					></iframe>
				</div>
			</div>
			{/* End google-map */}
		</>
	);
};

export default Map;

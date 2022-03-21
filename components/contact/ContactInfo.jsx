import React from 'react';
import useFetch from '../../hocks/usefetch';
import Spinner from '../about/spinner/Spinner';

const ContactInfo = () => {
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/contact-info'
	);

	if (loading) return <Spinner />;
	if (error) return <div>Error...</div>;
	return (
		<>
			<div className='contact-info'>
				<h4 className='text-white'>{data.heading}</h4>
				<p className='text-white'>{data.description}</p>

				<ul>
					<li className='media text-white'>
						<i className='icon icon-map'></i>
						<span className='media-body text-white'>{data.address}</span>
					</li>
					{/* End li */}

					<li className='media'>
						<i className='icon icon-envelope'></i>
						<span className='media-body text-white'>
							{data.eamil1} / {data.email2}
						</span>
					</li>
					{/* End li */}

					<li className='media'>
						<i className='icon icon-phone'></i>
						<span className='media-body text-white'>
							{data.phone1} / {data.phone2}
						</span>
					</li>
					{/* End li */}
				</ul>
			</div>
			{/* End .contact-info */}
		</>
	);
};

export default ContactInfo;

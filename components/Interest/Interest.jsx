/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useFetch from '../../hocks/usefetch';
import Spinner from '../about/spinner/Spinner';

const interestContent = [
	{
		img: 'swimming',
		name: 'Swimming',
	},
	{
		img: 'research',
		name: 'Research',
	},
	{
		img: 'acting',
		name: 'Acting',
	},
	{
		img: 'traveling',
		name: 'Traveling',
	},
];

const Interest = () => {
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/interests'
	);

	if (loading || error)
		return (
			<h1>
				<Spinner />
			</h1>
		);
	if (error) return <h1>Error...</h1>;
	console.log(data);
	return (
		<>
			<div className='interest-wrapper'>
				{/* <div className=''>
					<h3 className='title-interest'>Interest</h3>
				</div> */}
				{data.map((val, i) => (
					<div
						className='item-interest'
						key={i}
						data-aos='fade-right'
						data-aos-duration='1200'
						data-aos-delay={val.delayAnimation}
					>
						<img src={val.icon[0].url} alt='award' />
					</div>
					// End .col
				))}
			</div>
			{/* End .row */}
		</>
	);
};

export default Interest;

import React from 'react';
import useFetch from '../../hocks/usefetch';
import Spinner from '../about/spinner/Spinner';

const AwardContnet = [
	{
		img: 'Yearly-Best-Designer-3',
		awardName: 'Yearly Best Designer',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
	{
		img: 'Best-Employee-Award-1',
		awardName: 'Best employee award',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
	{
		img: 'Best-Performance-Award-2',
		awardName: 'Best performance award',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
];

const Awards = () => {
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/awards'
	);
	if (loading)
		return (
			<h1>
				<Spinner />
			</h1>
		);
	if (error) return <h1>Error...</h1>;
	return (
		<>
			<div className='row'>
				{data.map((val, i) => (
					<div
						className='col-lg-4 m-15px-tb'
						key={i}
						data-aos='fade-right'
						data-aos-duration='1200'
						data-aos-delay={val.delayAnimation}
					>
						<div className='feature-box-02 d-flex align-items-center'>
							<div className='icon'>
								<img src={val.icon.url} alt='award' />
							</div>
							<div className='media-body'>
								<p className='font-weight-bold' style={{ fontWeight: 'bold' }}>
									{val.title}
								</p>
								<p>{val.description}</p>
							</div>
						</div>
					</div>
					// End .col
				))}
			</div>
			{/* End .row */}
		</>
	);
};

export default Awards;

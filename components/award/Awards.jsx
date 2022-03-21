import React from 'react';

const AwardContnet = [
	{
		img: 'a11',
		awardName: 'Yearly Best Designer',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
	{
		img: 'a2',
		awardName: 'Best employee award',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
	{
		img: 'a3',
		awardName: 'Best performance award',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
];

const Awards = () => {
	return (
		<>
			<div className='row bg-dark'>
				{AwardContnet.map((val, i) => (
					<div className='col-lg-4 m-15px-tb' key={i}>
						<div className='feature-box-02 d-flex align-items-center'>
							<div className='icon'>
								<img
									src={`img/award/${val.img}.png`}
									alt='award'
									className='bg-white'
								/>
							</div>
							<div className='media-body '>
								<div className=''>
									<h6 className='text-white'>
										{val.awardName}
										<span style={{ fontSize: '8px' }}>({val.years})</span>
									</h6>
								</div>
								<p className='text-white'>{val.awardFor}</p>
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

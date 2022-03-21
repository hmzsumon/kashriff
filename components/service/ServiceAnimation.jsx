import React from 'react';
import useFetch from '../../hocks/usefetch';

export default function Service() {
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/my-services'
	);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error...</h1>;

	return (
		<>
			<div className='row'>
				{data.map((val, i) => (
					<div
						className='col-md-6 col-lg-4 my-3'
						key={i}
						data-aos='fade-right'
						data-aos-duration='1200'
						data-aos-delay={val.delayAnimation}
					>
						<div className='feature-box-01'>
							<div
								className='icon'
								style={{ position: 'relative', height: '235px' }}
							>
								{/* <i className={`icon ${val.icon}`}></i> */}
								<img
									src={val.icon.url}
									alt=''
									style={{
										width: '80px',
										position: 'absolute',
										top: '-20px',
										left: '-20px',
									}}
								/>
							</div>
							<div
								className='feature-content'
								style={{ position: 'absolute', top: '100px' }}
							>
								<h5>{val.title}</h5>
								<p>{val.description}</p>
							</div>
						</div>
						{/* End .feature-box-01 */}
					</div>
				))}
			</div>
		</>
	);
}

import React from 'react';
import TextLoop from 'react-text-loop';
import useFetch from '../../hocks/usefetch';
import Spinner from '../about/spinner/Spinner';


const Slider = () => {
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/hero-info'
	);
	if (loading) return <div><Spinner />.</div>;
	if (error) return <h1>Error...</h1>;

	const {
		first_name,
		last_name,
		sort_description,
		cv_link,
		expertise,
		hero_img,
	} = data;

	return (
		<>
		
			{/*  Home Banner */}
			<section id='home' className='home-banner'>
				{/* <div className='hb-top-fixed d-flex'>
					<div className='hb-info'>
						<a href={`tel:${phone1}`}>
							{phone1} / {phone2}{' '}
						</a>
						<a href='mailto:mail%20to:ibthemes21@gmail.com,com'>
							{email1} / {email2}
						</a>
					</div>
				</div> */}
				{/* End hp-top-fixed */}

				<div className='container'>
					<div className='row full-screen align-items-center'>
						<div className='col-lg-7'>
							<div className='type-box'>
								<h6 data-aos='fade-up' data-aos-duration='1200'>
									Hello, My name is
								</h6>
								<h1
									className='font-alt'
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='100'
								>
									<span className='text-uppercase'>{first_name}</span>{' '}
									<span className='text-capitalize'>{last_name}</span>
								</h1>
								<div
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='200'
								>
									<TextLoop>
										{expertise.map((item, index) => (
											<p key={item.id} className='loop-text lead'>
												{item.title}
											</p>
										))}
									</TextLoop>
								</div>

								<p
									className='desc'
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='300'
								>
									{sort_description}
								</p>
								<div
									className='mt-4'
									data-aos='fade-up'
									data-aos-duration='1200'
									data-aos-delay='400'
								>
									<a
										className='px-btn px-btn-white'
										href={cv_link}
										download
										target='_blank'
										rel='noreferrer'
									>
										Download CV
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Container*/}
				<div
					className='hb-me'
					style={{
						backgroundImage: `url(${hero_img.url})`,
					}}
				></div>
			</section>

			{/* End Home Banner  */}
		</>
	);
};

export default Slider;

import { format } from 'date-fns';
import React from 'react';
import useFetch from '../../hocks/usefetch';
import Awards from '../award/AwardsAnimation';
import Interest from '../Interest/Interest';
import Services from '../service/ServiceAnimation';
import Social from '../Social';
import Spinner from './spinner/Spinner';


const About = () => {
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/about-info'
	);
	const {
		loading: loading2,
		error: error2,
		data: data2,
	} = useFetch('https://kashriff-admin.herokuapp.com/headins');

	if (loading || loading2) return <Spinner />
		
	if (error || error2) return <h1>Error...</h1>;

	const {
		name,
		description,
		phone,
		email,
		freelance,
		skype,
		work_info,
		address,
		age,
		birthday,
		myImage,
	} = data;

	return (
		<>
			<section id='about' className='section theme-light dark-bg'>
				<div className='container'>
					<div className='row align-items-center justify-content-center'>
						<div
							className='col-md-6 col-lg-4'
							data-aos='fade-up'
							data-aos-duration='1200'
						>
							<div className='about-me'>
								<div className='img'>
									<div className='img-in'>
										<img src={myImage.url} alt='about' />
									</div>

									<Social />

									{/* End social icon */}
								</div>
								{/* End img */}
								<div className='info'>
									<p>{work_info}</p>
									<h3>{name}</h3>
								</div>
								{/* End info */}
							</div>
							{/* End about-me */}
						</div>
						{/* End col */}

						<div
							className='col-lg-7 ml-auto'
							data-aos='fade-up'
							data-aos-duration='1200'
							data-aos-delay='200'
						>
							<div className='about-info'>
								<div className='title'>
									{data2[0].title && <h3>{data2[0].title}</h3>}
								</div>
								<div className='about-text'>
									<p>{description}</p>
								</div>
								<div className='info-list'>
									<div className='row'>
										<div className='col-sm-6'>
											<ul>
												<li>
													<label>Name: </label>
													<span>{name}</span>
												</li>
												<li>
													<label>Birthday: </label>
													<span>
														{format(new Date(birthday), 'dd MMMM yyyy')}
													</span>
												</li>
												<li>
													<label>Age: </label>
													<span>{age} years</span>
												</li>
												<li>
													<label>Address: </label>
													<span>{address}</span>
												</li>
											</ul>
										</div>
										<div className='col-sm-6'>
											<ul>
												<li>
													<label>Phone: </label>
													<span>{phone}</span>
												</li>
												<li>
													<label>Email: </label>
													<span>{email}</span>
												</li>
												<li>
													<label>Skype: </label>
													<span>{skype}</span>
												</li>
												<li>
													<label>Freelance: </label>
													{freelance ? (
														<span>Available</span>
													) : (
														<span>Not available</span>
													)}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End col */}
					</div>

					{/* separated */}

					<div
						className='separated'
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + 'img/border-dark.png'
							})`,
						}}
					></div>

					{/* End separated */}
					<div className='title'>
						<h3>{data2[1].title}</h3>
					</div>

					<Services />

					{/* End .row */}

					{/* separated */}
					<div
						className='separated'
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + 'img/border-dark.png'
							})`,
						}}
					></div>
					{/* End separated */}

					<div className='title'>
						<h3>{data2[2].title}</h3>
					</div>

					<Awards />
					{/* End Awards */}

					{/* separated */}
					<div
						className='separated'
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + 'img/border-dark.png'
							})`,
						}}
					></div>
					{/* End separated */}

					<div className='title'>
						<h3>{data2[3].title}</h3>
					</div>

					<Interest />
					{/* End Testimonaial */}
				</div>
			</section>
		</>
	);
};

export default About;

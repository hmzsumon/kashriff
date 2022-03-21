import React from 'react';
import useFetch from '../../hocks/usefetch';
import Spinner from '../about/spinner/Spinner';
import Skills from '../skills/Skills';

const Resume = () => {
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/education-and-skills'
	);
	const {
		loading: loading2,
		error: error2,
		data: data2,
	} = useFetch('https://kashriff-admin.herokuapp.com/headins');

	const {
		loading: loading3,
		error: error3,
		data: data3,
	} = useFetch('https://kashriff-admin.herokuapp.com/experiences');

	const {
		loading: loading4,
		error: error4,
		data: data4,
	} = useFetch('https://kashriff-admin.herokuapp.com/my-features');

	if (loading || loading2 || loading3 || loading4) return <Spinner />;
	if (error || error2 || error3 || error4) return <h1>Error...</h1>;

	return (
		<>
			<section id='resume' className='section'>
				<div className='container'>
					<div className='title'>
						<h3>{data2[4].title}</h3>
					</div>

					<div className='row align-items-center'>
						<div
							className='col-lg-4 m-15px-tb'
							data-aos='fade-up'
							data-aos-duration='1200'
						>
							<ul className='aducation-box'>
								{data.map((val, i) => (
									<li key={i}>
										<span>{val.duration}</span>
										<h6>{val.courses} </h6>
										<p>{val.institution}</p>{' '}
									</li>
								))}
							</ul>
						</div>
						{/* End .col */}

						<div
							className='col-lg-7 ml-auto m-15px-tb'
							data-aos='fade-up'
							data-aos-duration='1200'
							data-aos-delay='200'
						>
							<Skills />
						</div>
						{/* End .col */}
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
						<h3>{data2[5].title}</h3>
					</div>
					{/* End title */}
					<div className='resume-box'>
						{data3.map((val, i) => (
							<div
								className='resume-row'
								key={i}
								data-aos='fade-up'
								data-aos-duration='1200'
								data-aos-delay={val.delayAnimation}
							>
								<div className='row'>
									<div className='col-md-4 col-xl-3'>
										<div className='rb-left'>
											<h6>{val.designation}</h6>
											<label>{val.company}</label>
											<p>{val.duration}</p>
											<div className='rb-time'>{val.time}</div>
										</div>
									</div>
									<div className='col-md-8 col-xl-9'>
										<div className='rb-right'>
											<div className='br_line'></div>
											{/* <h6>{val.compnayName}</h6> */}
											<p className='text-white'>{val.description}</p>
										</div>
									</div>
								</div>
							</div>
						))}
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

					{/* Why Kashriff */}

					<div className='title text-center'>
						<h3>{data2[6].title}</h3>
					</div>

					<div className='why-box '>
						{data4.map((val, i) => (
							<div
								className='item'
								key={i}
								data-aos='fade-up'
								data-aos-duration='1200'
								data-aos-delay={val.title}
							>
								<h2>{val.title}</h2>
								<p className='text-white'>{val.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Resume;

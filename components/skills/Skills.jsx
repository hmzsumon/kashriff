import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import useFetch from '../../hocks/usefetch';
import Spinner from '../about/spinner/Spinner';

const skillContent = [
	{
		name: 'Graphics Designing',
		numberPercent: '95',
		startCount: '0',
		endCount: '92',
	},
	{
		name: 'Apparel Designing',
		numberPercent: '90',
		startCount: '0',
		endCount: '85',
	},
	{
		name: 'Footwear Designing',
		numberPercent: '85',
		startCount: '0',
		endCount: '90',
	},
	{
		name: 'Ui/Ux Designing',
		numberPercent: '85',
		startCount: '0',
		endCount: '85',
	},
	{
		name: 'Embroidery Designing',
		numberPercent: '80',
		startCount: '0',
		endCount: '80',
	},
	{
		name: 'Garmments Pattren Designing',
		numberPercent: '85',
		startCount: '0',
		endCount: '85',
	},
	{
		name: 'CLO 3D/Marvelous Designing',
		numberPercent: '90',
		startCount: '0',
		endCount: '90',
	},
	{
		name: 'Packaging, Photo Editing, Video Editing',
		numberPercent: '90',
		startCount: '0',
		endCount: '90',
	},
];

const Skills = () => {
	let startCount = 0;
	const { loading, error, data } = useFetch(
		'https://kashriff-admin.herokuapp.com/skills'
	);

	const [focus, setFocus] = React.useState(false);

	if (loading)
		return (
			<h1>
				<Spinner />
			</h1>
		);
	if (error) return <h1>Error...</h1>;
	return (
		<>
			<div className='skill-wrapper '>
				{data.map((skill, i) => (
					<div className='skill-lt ' key={i}>
						<h6 className='text-white'>{skill.title}</h6>
						<span className='count-inner text-white'>
							<CountUp
								start={focus ? startCount : null}
								end={skill.percentage}
								duration={1}
								redraw={true}
							>
								{({ countUpRef }) => (
									<VisibilitySensor
										onChange={(isVisible) => {
											if (isVisible) {
												setFocus(true);
											}
										}}
									>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
							%
						</span>
						<div className='skill-bar'>
							<div
								data-aos='fade-right'
								className='skill-bar-in'
								style={{ width: skill.percentage + '%' }}
							></div>
						</div>
					</div>
					// End skill-lt
				))}
			</div>
		</>
	);
};

export default Skills;

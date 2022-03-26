import axios from 'axios';
import React from 'react';


const Slider = ({info}) => {
    console.log(info);
	// const { loading, error, data } = useFetch(
	// 	'https://kashriff-admin.herokuapp.com/hero-info'
	// );
	// if (loading) return <h1>Loading...</h1> ;
	// if (error) return <h1>Error...</h1>;

	// const {
	// 	first_name,
	// 	last_name,
	// 	sort_description,
	// 	cv_link,
	// 	expertise,
	// 	hero_img,
	// } = data;

	return (
		<>
		
			{/*  Home Banner */}
			<h1>Hello</h1>

			{/* End Home Banner  */}
		</>
	);
};

export default Slider;
export async function getStaticProps(context) {

    const {data} = await axios.get('https://kashriff-admin.herokuapp.com/hero-info');
    console.log(data);
    
    return {
      props: {
        info: data,
      }, // will be passed to the page component as props
    }
  }
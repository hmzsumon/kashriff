import React from 'react';
import TextLoop from 'react-text-loop';

const sliderContent = {
  name: 'KASHRIFF Kawser',
  description: `I am specialized in shophisticated UI/UX , CAD and 3D fashion graphics for apparels and foot wear. I provide all services to all sizes of clients regarding all these designing.`,
  btnText: ' Donwload CV',
};

const Slider = () => {
  //   const { loading, error, data } = useFetch(
  //     'https://kashriff-admin.herokuapp.com/hero-info'
  //   );
  //   if (loading)
  //     return (
  //       <div>
  //         <Spinner />.
  //       </div>
  //     );
  //   if (error) return <h1>Error...</h1>;

  //   const {
  //     first_name,
  //     last_name,
  //     sort_description,
  //     cv_link,
  //     expertise,
  //     hero_img,
  //   } = data;

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
                  <span>{sliderContent.name}</span>{' '}
                </h1>
                <div
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  <TextLoop>
                    <p className='loop-text lead'>Graphics Designing</p>
                    <p className='loop-text lead'> Apparel Designing(CLO 3D)</p>
                    <p className='loop-text lead'> Footwear Designing</p>
                    <p className='loop-text lead'> Embroidery Designing</p>
                    <p className='loop-text lead'> Ui/Ux Designing</p>
                    <p className='loop-text lead'> Packaging, Photo Editing</p>
                  </TextLoop>
                </div>

                <p
                  className='desc'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='300'
                >
                  {sliderContent.description}
                </p>
                <div
                  className='mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='400'
                >
                  <a
                    className='px-btn px-btn-white'
                    href='#'
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
            backgroundImage: `url('https://res.cloudinary.com/kashriff-kawser/image/upload/v1645974171/111_aef28af36f.png')`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

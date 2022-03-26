import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../assets/scss/main.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;

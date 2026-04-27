import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import BannerImg2 from '../../assets/images/backgrounds/home-banner-2.svg'

const MetaTag = () => {
  const metaData = useSelector(state => state.metaData)
  return (
    <Helmet>
      {/* Chrome, Firefox OS and Opera */}
      <meta name="theme-color" content={metaData.themeColor} />
      {/* Windows Phone */}
      <meta name="msapplication-navbutton-color" content={metaData.themeColor}/>
      {/* iOS Safari> */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content={metaData.themeColor} />

      {/* Preload Largest Contentful Paint image */}
      <link rel="preload" href={BannerImg2} as="image"></link>
    </Helmet>
  )
}

export default MetaTag
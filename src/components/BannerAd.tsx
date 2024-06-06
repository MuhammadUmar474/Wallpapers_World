import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const BannerAdComponent = () => {
  // const bannerAdId = 'ca-app-pub-2587642180140061/7634473390';
  const bannerAdId = TestIds.ADAPTIVE_BANNER;

  return (
    <BannerAd
      unitId={bannerAdId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
  );
};

export default BannerAdComponent;

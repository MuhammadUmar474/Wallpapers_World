import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const BannerAdComponent = () => {
  const bannerAdId = TestIds.ADAPTIVE_BANNER;

  return (
    <BannerAd
      unitId={bannerAdId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
  );
};

export default BannerAdComponent;

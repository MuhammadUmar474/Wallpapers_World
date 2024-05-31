import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const BannerAdComponent = () => {
  const bannerAdId = TestIds.ADAPTIVE_BANNER;

  return (
    <BannerAd
      unitId={bannerAdId}
      size={BannerAdSize.BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdLoaded={() => {
        console.log('Banner Ad loaded');
      }}
      onAdFailedToLoad={error => {
        console.error('Banner Ad failed to load:', error);
      }}
    />
  );
};

export default BannerAdComponent;

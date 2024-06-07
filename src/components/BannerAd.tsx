import React from 'react';
import { View } from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import { wp } from '../utils/dimensionUtils/dimensions';

const BannerAdComponent = () => {
  // const bannerAdId = 'ca-app-pub-2587642180140061/7634473390';
  const bannerAdId = TestIds.ADAPTIVE_BANNER;

  return (
    <View style={{width:wp('100')}}>
    <BannerAd
      unitId={bannerAdId}
      size={BannerAdSize.FULL_BANNER}
      
    />
    </View>
  );
};

export default BannerAdComponent;

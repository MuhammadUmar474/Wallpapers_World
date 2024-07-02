import React from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {wp} from '../utils/dimensionUtils/dimensions';

const BannerAdComponent = ({bannerAdId}: any) => {
  return (
    <View style={{width: wp('100')}}>
      <BannerAd unitId={bannerAdId} size={BannerAdSize.FULL_BANNER} />
    </View>
  );
};

export default BannerAdComponent;

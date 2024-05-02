import React from 'react';
import {View} from 'react-native';

import style from './Styles';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import {COLORS} from '../../shared/theme';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {Text24} from '../../components/Text/Text';

const Likes = () => {
  return (
    <View style={style.container}>
      <View style={{height: hp('100'), backgroundColor: COLORS.background}}>
        <View style={{marginTop: hp('6'), marginHorizontal: wp('5')}}>
          <HorizontalView>
            <Text24 textStyle={{color: COLORS.white}}>HD Wallpapers</Text24>
          </HorizontalView>
        </View>
      </View>
    </View>
  );
};

export default Likes;

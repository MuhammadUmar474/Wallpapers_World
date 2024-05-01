import React from 'react';
import {ImageBackground, View} from 'react-native';

import style from './Styles';
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import {hp} from '../../utils/dimensionUtils/dimensions';
import {Text16, Text28} from '../../components/Text/Text';
import {navigate} from '../../navigation/rootNavigation';
import {ImgsPath} from '../../assets/images/ImagesPath';

const Explore = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={ImgsPath.exploreBackGround}
        resizeMode="cover"
        style={style.backGroundImg}>
        <View style={style.txtView}>
          <Text28 textStyle={style.exploreTxt}>Explore Wallpapers World</Text28>
          <Text16 textStyle={style.exploreTxt}>
            Explore , View and Share {'\n'} HD Wallpapers Now!
          </Text16>
          <ButtonComp
            btnName={'Start Explore'}
            styleBtn={{marginTop: hp('2')}}
            onPress={() => {
              navigate('BottomTab');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Explore;

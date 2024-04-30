import React from 'react';
import {SafeAreaView} from 'react-native';

import style from './Styles';
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import {hp} from '../../utils/dimensionUtils/dimensions';
import {Text16, Text28} from '../../components/Text/Text';
import {navigate} from '../../navigation/rootNavigation';

const Explore = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text28 textStyle={style.exploreTxt}>Explore Wallpapers World</Text28>
      <Text16 textStyle={style.exploreTxt}>
        Explore , View and Share {'\n'} HD Wallpapers Now!
      </Text16>
      <ButtonComp
        btnName={'Start Explore'}
        styleBtn={{marginTop: hp('2')}}
        onPress={() => {
          navigate('Home');
        }}
      />
    </SafeAreaView>
  );
};

export default Explore;

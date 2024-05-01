import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';

import style from './Styles';
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import {Text16, Text28} from '../../components/Text/Text';
import {navigate} from '../../navigation/rootNavigation';
import {Paths} from '../../assets/Images/ImagesPath';

const Explore = () => {
  return (
    <SafeAreaView style={style.container}>
      <Image
        source={Paths?.ExploreBackground}
        style={style?.backgroundImg}
        resizeMode="cover"
      />
      <View style={style?.blurView} />
      <View style={style?.bottomContainer}>
        <Text28 textStyle={style.exploreTxt}>Explore Wallpapers World</Text28>
        <Text16 textStyle={style.exploreTxt}>
          Explore , View and Share {'\n'} HD Wallpapers Now!
        </Text16>
        <ButtonComp
          btnName={'Start Explore'}
          styleBtn={style.exploreBtn}
          styleTxt={style?.btnTxt}
          onPress={() => {
            navigate('BottomTab');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;

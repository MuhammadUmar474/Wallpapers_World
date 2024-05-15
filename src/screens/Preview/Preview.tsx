import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
} from '../../shared/vectorIcons';
import FastImage from 'react-native-fast-image';

import {COLORS} from '../../shared/theme';
import {Text12} from '../../components/Text/Text';
import styles from './Styles';
import Spacer from '../../components/Spacer/Spacer';
import HorizontalView from '../../components/HorizontalView/HorizontalView';

const Preview = ({navigation, route}: any) => {
  const uri = route.params?.uri;
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <HorizontalView style={styles.topBtnContainer}>
        <TouchableOpacity style={styles.backArrow} onPress={onBackPress}>
          <Ionicons name={'arrow-back'} size={30} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.likeStyle,
            backgroundColor: false ? COLORS.red : COLORS.transparent,
            borderWidth: false ? 0 : 1,
          }}>
          <FontAwesome name={'heart'} size={25} color={COLORS.white} />
        </TouchableOpacity>
      </HorizontalView>
      <FastImage source={{uri: uri}} resizeMode="cover" style={styles.img}>
        <HorizontalView style={styles.innerContainer}>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.iconContainer}>
              <AntDesign name="sharealt" size={wp('7')} color={COLORS.white} />
            </View>
            <Spacer height={hp('1')} />
            <Text12 textStyle={styles.txt}>Share</Text12>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.iconContainer}>
              <Feather name="download" size={wp('7')} color={COLORS.white} />
            </View>
            <Spacer height={hp('1')} />
            <Text12 textStyle={styles.txt}>Set</Text12>
          </TouchableOpacity>
        </HorizontalView>
      </FastImage>
    </View>
  );
};

export default Preview;

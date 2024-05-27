import React, {useState} from 'react';
import {View, TouchableOpacity, Share, Alert} from 'react-native';
import FastImage from 'react-native-fast-image';

import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
} from '../../shared/vectorIcons';
import {COLORS} from '../../shared/theme';
import {Text12} from '../../components/Text/Text';
import styles from './Styles';
import Spacer from '../../components/Spacer/Spacer';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import BottomModal from '../../components/Modal/BottomModal/BottomModal';

const Preview = ({navigation, route}: any) => {
  const uri = route.params?.uri;

  const [visible, setVisible] = useState<Boolean>(false);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onShareBtnPress = async () => {
      try {
        await Share.share({
          message: uri,
        });
      } catch (error:any) {
        Alert.alert(error.message);
      }
  }

  return (
    <View style={styles.container}>
      <HorizontalView style={styles.topBtnContainer}>
        <TouchableOpacity style={styles.backArrow} onPress={onBackPress}>
          <Ionicons name={'arrow-back'} size={30} color={COLORS.white} />
        </TouchableOpacity>
      </HorizontalView>
      <FastImage source={{uri: uri}} resizeMode="cover" style={styles.img}>
        <HorizontalView style={styles.innerContainer}>
          <TouchableOpacity style={styles.optionContainer} onPress={onShareBtnPress}>
            <View style={styles.iconContainer}>
              <AntDesign name="sharealt" size={wp('7')} color={COLORS.white} />
            </View>
            <Spacer height={hp('1')} />
            <Text12 textStyle={styles.txt}>Share</Text12>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={styles.optionContainer}>
            <View style={styles.iconContainer}>
              <Feather name="download" size={wp('7')} color={COLORS.white} />
            </View>
            <Spacer height={hp('1')} />
            <Text12 textStyle={styles.txt}>Set</Text12>
          </TouchableOpacity>
        </HorizontalView>
      </FastImage>

      <BottomModal visible={visible} setVisible={setVisible} uri={uri} />
    </View>
  );
};

export default Preview;

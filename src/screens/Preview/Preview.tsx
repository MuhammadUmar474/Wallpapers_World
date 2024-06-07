import React, {useRef, useState} from 'react';
import {View, TouchableOpacity,Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import Share from 'react-native-share';
import ViewShot, {captureRef} from 'react-native-view-shot';

import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {AntDesign, Feather, Ionicons} from '../../shared/vectorIcons';
import {COLORS} from '../../shared/theme';
import {Text12} from '../../components/Text/Text';
import styles from './Styles';
import Spacer from '../../components/Spacer/Spacer';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import BottomModal from '../../components/Modal/BottomModal/BottomModal';
import Loader from '../../components/Loader/Loader';
import BannerAdComponent from '../../components/BannerAd';


const Preview = ({navigation, route}: any) => {
  // const PreviewBannerAdId: 'ca-app-pub-2587642180140061/1939293589';
  const [isShareOpen,setIsShareOpen] = useState(false)
  const uri = route.params?.uri;
  const imgRef = useRef();
  const [loader, setLoader] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onShareBtnPress = async () => {
    try {
      setIsShareOpen(true)
      const uri = await captureRef(imgRef, {
        format: 'png',
        quality: 0.7,
      });
      await setIsShareOpen(false)
      await Share.open({url: uri});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <HorizontalView style={styles.topBtnContainer}>
        <TouchableOpacity style={styles.backArrow} onPress={onBackPress}>
          <Ionicons name={'arrow-back'} size={30} color={COLORS.white} />
        </TouchableOpacity>
      </HorizontalView>

      {loader && <Loader style={styles.loader} color />}

     
      <ViewShot ref={imgRef}>
      <View>
        <FastImage
          onLoad={() => setLoader(true)}
          onLoadEnd={() => setLoader(false)}
          source={{uri: uri}}
          resizeMode="cover"
          style={styles.img} >
           {!isShareOpen &&
           <HorizontalView style={styles.innerContainer}>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={onShareBtnPress}>
              <View style={styles.iconContainer}>
                <AntDesign
                  name="sharealt"
                  size={wp('7')}
                  color={COLORS.white}
                />
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
           }
            </FastImage>
            {!isShareOpen &&
            <BannerAdComponent  />
          }
        </View>
          </ViewShot>
     

      <BottomModal visible={visible} setVisible={setVisible} uri={uri} />
    </View>
  );
};

export default Preview;

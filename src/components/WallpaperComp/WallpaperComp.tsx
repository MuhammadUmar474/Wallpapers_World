import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {COLORS} from '../../shared/theme';
import {FontAwesome} from '../../shared/vectorIcons';
import {navigate} from '../../navigation/rootNavigation';

const WallpaperComp = ({item}: any) => {
  const onWallPaperPress = () =>
    navigate('Preview', {uri: item?.src?.original});

  return (
    <TouchableOpacity style={styles.container} onPress={onWallPaperPress}>
      <FastImage
        source={{
          uri: item?.src?.medium,
        }}
        style={styles.imgStyle}></FastImage>
      <TouchableOpacity
        style={{
          ...styles.likeStyle,
          backgroundColor: false ? COLORS.red : COLORS.transparent,
          borderWidth: false ? 0 : 1,
        }}>
        <FontAwesome name={'heart'} size={20} color={COLORS.white} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default memo(WallpaperComp);

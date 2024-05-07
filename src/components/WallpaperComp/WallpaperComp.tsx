import React, {memo} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {ImgsPath} from '../../assets/images/ImagesPath';
import {COLORS} from '../../shared/theme';
import {FontAwesome} from '../../shared/vectorIcons';

const WallpaperComp = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={ImgsPath.exploreBackGround} style={styles.imgStyle} />
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

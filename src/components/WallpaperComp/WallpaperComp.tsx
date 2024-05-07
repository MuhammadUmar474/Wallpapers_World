import React, {memo} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {ImgsPath} from '../../assets/images/ImagesPath';

const WallpaperComp = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={ImgsPath.exploreBackGround} style={styles.imgStyle} />
    </TouchableOpacity>
  );
};

export default memo(WallpaperComp);

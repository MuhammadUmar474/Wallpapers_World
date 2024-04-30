import React, {memo} from 'react';
import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';

import {Text16} from '../Text/Text';
import {COLORS} from '../../shared/theme';
import styles from './styles';

const ButtonComp = (props: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        ...styles.btn,
        ...props.styleBtn,
      }}
      onPress={props.onPress}
      disabled={props?.disabled || props.loading}>
      {props.loading ? (
        <ActivityIndicator size="small" color={props.color || COLORS.white} />
      ) : (
        <View style={[styles.row, props.rowStyle]}>
          {props.icon}
          <Text16 textStyle={[styles.btnTxt, props.styleTxt]}>
            {props.btnName}
          </Text16>
          {/* <Image source={ImgsPath.arrowRight} style={styles.iconStyle} /> */}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(ButtonComp);

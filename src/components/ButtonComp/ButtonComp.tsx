import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Text16} from '../Text/Text';
import styles from './styles';

const ButtonComp = (props: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        ...styles.btn,
        ...props.styleBtn,
      }}
      onPress={props.onPress}>
      <View style={[styles.row, props.rowStyle]}>
        <Text16 textStyle={[styles.btnTxt, props.styleTxt]}>
          {props.btnName}
        </Text16>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ButtonComp);

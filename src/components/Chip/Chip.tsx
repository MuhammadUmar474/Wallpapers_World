import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

import {Text14} from '../Text/Text';
import styles from './styles';
import {COLORS} from '../../shared/theme';

const Chip = (props: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.selectedItem == props.title && styles.container1,
      ]}
      onPress={props.onPress}>
      <Text14
        textStyle={{
          color:
            props.selectedItem == props.title
              ? COLORS.black
              : COLORS.unSelectedChipTxt,
        }}>
        {props.title}
      </Text14>
    </TouchableOpacity>
  );
};

export default memo(Chip);

import React, {memo, useContext} from 'react';
import {TouchableOpacity} from 'react-native';

import {Text14} from '../Text/Text';
import styles from './styles';
import {COLORS} from '../../shared/theme';
import AppContext from '../../context/AppContext';

const Chip = (props: any) => {
  const {selectedColor} = useContext(AppContext);
  return (
    <TouchableOpacity
      style={[
        styles.container(selectedColor),
        props.selectedItem == props.title && styles.container1(selectedColor),
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

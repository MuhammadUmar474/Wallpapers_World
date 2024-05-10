import React, {memo, useContext} from 'react';
import {TouchableOpacity} from 'react-native';

import {Text14} from '../Text/Text';
import styles from './styles';
import {COLORS} from '../../shared/theme';
import AppContext from '../../context/AppContext';

interface ChipProps {
  onPress: () => void;
  selectedItem: string; // Assuming selectedItem is a string
  title: string;
}

const Chip: React.FC<ChipProps> = ({onPress, selectedItem, title}) => {
  const {selectedColor} = useContext(AppContext);

  return (
    <TouchableOpacity
      style={[
        styles.container(selectedColor),
        selectedItem === title && styles.container1(selectedColor),
      ]}
      onPress={onPress}>
      <Text14
        textStyle={{
          color:
            selectedItem === title ? (selectedColor ? COLORS.black : COLORS?.white) : ( selectedColor ?  COLORS.unSelectedChipTxt : COLORS?.black),
        }}>
        {title}
      </Text14>
    </TouchableOpacity>
  );
};

export default memo(Chip);

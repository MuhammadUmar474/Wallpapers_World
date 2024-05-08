import {View, Text, TextInput} from 'react-native';
import React, { useContext } from 'react';
import HorizontalView from '../HorizontalView/HorizontalView';
import {COLORS} from '../../shared/theme';
import style from './styles';
import {FontAwesome} from '../../shared/vectorIcons';
import {wp} from '../../utils/dimensionUtils/dimensions';
import AppContext from '../../context/AppContext';

const SearchComp = ({value, onChangeText, onSubmitEditing}: any) => {
  const {selectedColor} = useContext(AppContext)
  return (
    <HorizontalView style={style?.txtInputContainer(selectedColor)}>
      <FontAwesome
        name={'search'}
        color={selectedColor ? COLORS.white : COLORS?.black}
        size={25}
        style={{marginLeft: wp('5')}}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        style={[
          style?.txtInput,
          {
            color:selectedColor ?  COLORS?.white : COLORS?.black,
          },
        ]}
        placeholder=""
        placeholderTextColor={selectedColor ? COLORS?.white : COLORS?.black}
      />
    </HorizontalView>
  );
};

export default SearchComp;

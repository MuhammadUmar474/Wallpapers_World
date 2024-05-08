import {View, Text, TextInput} from 'react-native';
import React from 'react';
import HorizontalView from '../HorizontalView/HorizontalView';
import {COLORS} from '../../shared/theme';
import style from './styles';
import {FontAwesome} from '../../shared/vectorIcons';
import {wp} from '../../utils/dimensionUtils/dimensions';

const SearchComp = ({value, onChangeText, onSubmitEditing}: any) => {
  return (
    <HorizontalView style={style?.txtInputContainer}>
      <FontAwesome
        name={'search'}
        color={COLORS.white}
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
            color: COLORS?.white,
          },
        ]}
        placeholder=""
        placeholderTextColor={COLORS?.white}
      />
    </HorizontalView>
  );
};

export default SearchComp;

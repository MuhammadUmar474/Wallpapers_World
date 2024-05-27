import {memo, useContext} from 'react';
import {ActivityIndicator} from 'react-native';

import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import AppContext from '../../context/AppContext';
import {COLORS} from '../../shared/theme';

const Loader = () => {
  const {selectedColor} = useContext(AppContext);
  return (
    <ActivityIndicator
    style={{marginTop:hp('10')}}
      size={wp('10')}
      color={selectedColor ? COLORS?.white : COLORS?.background}
    />
  );
};

export default memo(Loader);

import {memo, useContext} from 'react';

import AppContext from '../../context/AppContext';
import {COLORS} from '../../shared/theme';
import { Text15 } from '../Text/Text';
import { hp } from '../../utils/dimensionUtils/dimensions';

const EmptyComp = () => {
  const {selectedColor} = useContext(AppContext);
  return (
    <Text15
      textStyle={{
        textAlign: 'center',
        marginTop: hp('10'),
        color: selectedColor ? COLORS?.white : COLORS?.black,
      }}>
      No Data Found
    </Text15>
  );
};

export default memo(EmptyComp);

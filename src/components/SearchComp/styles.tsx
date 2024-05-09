import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';

const style = StyleSheet.create({
  txtInputContainer: (selectedColor) =>({
    borderRadius: 20,
    borderColor: selectedColor ? COLORS?.white : COLORS?.black,
    borderWidth: 1,
    marginTop: hp('1'),
  }),
  txtInput: {
    width: wp('90%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
  },
});

export default style;

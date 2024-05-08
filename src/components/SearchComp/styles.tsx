import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';

const style = StyleSheet.create({
  txtInputContainer: {
    borderRadius: 20,
    borderColor: COLORS?.white,
    borderWidth: 1,
    marginTop: hp('1'),
  },
  txtInput: {
    width: wp('90%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
  },
});

export default style;

import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {wp, hp} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  btn: {
    width: wp('90'),
    height: hp('7'),
    backgroundColor: COLORS.white,
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    width: wp('80'),
  },
  iconStyle: {height: 22, width: 22},
  backBtn: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: COLORS.btnBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

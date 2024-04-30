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
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('80'),
    justifyContent: 'space-between',
  },
  iconStyle: {height: 22, width: 22},
  btnTxt: {color: COLORS.primary},
  backBtn: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: COLORS.btnBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBtn: {
    height: 56,
    width: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallArrow: {
    bottom: 7,
    right: 0,
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

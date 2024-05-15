import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {COLORS} from '../../shared/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBtnContainer: {
    width: wp('80'),
    top: hp(8),
    position: 'absolute',
    zIndex: 1,
  },
  backArrow: {
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 25,
    height: 50,
    width: 50,
    left: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparent,
  },
  likeStyle: {
    borderColor: COLORS.white,
    borderRadius: 25,
    height: 50,
    width: 50,
    right: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    borderRadius: wp('4'),
    height: hp('90'),
    width: wp('100'),
    alignItems: 'center',
  },
  innerContainer: {
    position: 'absolute',
    bottom: hp('3'),
    width: wp('50'),
  },
  optionContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: wp('4'),
    borderRadius: wp('10'),
  },
  txt: {
    borderRadius: wp('2.5'),
    paddingVertical: hp('0.1'),
    paddingHorizontal: wp('2'),
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: COLORS.white,
  },
});

export default styles;

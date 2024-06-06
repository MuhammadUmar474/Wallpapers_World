import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {COLORS} from '../../shared/theme';
import {calculations} from '../../utils/helperUtils/helperUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBtnContainer: {
    width: wp('90'),
    top: hp('5'),
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
  loader: {
    position: 'absolute',
    marginTop: hp('27'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    aspectRatio: calculations.screenRatio(),
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

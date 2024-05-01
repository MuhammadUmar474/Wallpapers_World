import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {hp, wp} from '../../utils/dimensionUtils/dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  exploreTxt: {color: COLORS.black, marginTop: hp('2'), textAlign: 'center'},
  backgroundImg: {width: wp('100%'), height: hp('60%')},
  blurView: {
    backgroundColor: COLORS?.blurWhite,
    width: wp('100'),
    height: hp('20'),
    marginTop: hp('-11.5'),
  },
  bottomContainer: {
    alignItems: 'center',
    backgroundColor: COLORS?.white,
    width: wp('100'),
    marginTop: hp('-9'),
    height: hp('35'),
    position: 'absolute',
    bottom: 0,
  },
  exploreBtn: {
    marginVertical: hp('2'),
    backgroundColor: COLORS?.primary,
    width: wp('80%'),
  },
  btnTxt: {color: COLORS?.white},
});

export default style;

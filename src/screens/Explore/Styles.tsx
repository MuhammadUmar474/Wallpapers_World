import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {hp, wp} from '../../utils/dimensionUtils/dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  backGroundImg: {height: hp('100'), width: wp('100')},
  txtView: {
    bottom: 40,
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: wp('5'),
  },
  exploreTxt: {color: COLORS.white, marginTop: hp('2')},
});

export default style;

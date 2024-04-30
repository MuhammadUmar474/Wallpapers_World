import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {hp} from '../../utils/dimensionUtils/dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  exploreTxt: {color: COLORS.white, marginTop: hp('2')},
});

export default style;

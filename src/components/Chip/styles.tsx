import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {wp, hp} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('4.5'),
    marginHorizontal: wp('0.7'),
    paddingVertical: hp('1'),
    backgroundColor: COLORS.unSelectedChip,
    borderRadius: wp('10'),
  },
  container1: {
    backgroundColor: COLORS.selectedChip,
  },
  title: {
    color: COLORS.white,
  },
});

export default styles;

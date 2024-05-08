import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {wp, hp} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  container: (selectedColor)=>({
    paddingHorizontal: wp('4.5'),
    marginHorizontal: wp('0.7'),
    paddingVertical: hp('1'),
    backgroundColor: selectedColor ?  COLORS.unSelectedChip : COLORS?.selectedChip,
    borderRadius: wp('10'),
  }),
  container1:(selectedColor)=>({
    backgroundColor: selectedColor ? COLORS.selectedChip : COLORS?.unSelectedChip,
  }),
  title: {
    color: COLORS.white,
  },
});

export default styles;

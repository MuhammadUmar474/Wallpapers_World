import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {wp, hp} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  container: {
    height: hp('25'),
    width: wp('44'),
    borderRadius: 16,
    marginHorizontal: wp('1'),
    marginVertical: hp('1'),
  },
  imgStyle: {
    resizeMode: 'cover',
    height: hp('25'),
    width: wp('44'),
    borderRadius: 16,
  },
});

export default styles;

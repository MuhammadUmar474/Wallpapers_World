import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import { hp, wp } from '../../utils/dimensionUtils/dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    height: hp('25'),
    width: wp('44'),
    borderRadius: 24,
    marginHorizontal: wp('1'),
    marginVertical: hp('1'),
  },
  container2:{ marginTop: hp('6'), marginHorizontal: wp('4') },
  imgStyle: {
    resizeMode: 'cover',
    height: hp('25'),
    width: wp('44'),
    borderRadius: 24,
  },
  likeStyle: {
    borderColor: COLORS.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignSelf: 'flex-end',
  },
});

export default style;

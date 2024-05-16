import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utils/dimensionUtils/dimensions';
import {COLORS} from '../../../shared/theme';

const styles = StyleSheet.create({
  bottomModalWrapper: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    height: '100%',
    bottom: 0,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  modalContainer: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
  },
  heading: {
    color: COLORS.black,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  content: {
    marginHorizontal: wp('6'),
  },
  row: {
    marginTop: hp('3.5'),
  },
  icon: {
    marginRight: wp('5'),
  },
});

export default styles;

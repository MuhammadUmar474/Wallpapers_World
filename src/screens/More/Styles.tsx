import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  IconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS?.white,
    padding: 4,
  },
  listItem: {marginTop: hp('1'), flexDirection: 'row'},
  listText: {color: COLORS?.white, marginLeft: wp('6')},
  InnerContainer: {marginHorizontal: wp('5')},
  Heading: {color: COLORS.white, textAlign: 'center', marginVertical: hp('6')},
  card: {
    marginBottom: hp('2'),
    width: wp('90'),
    padding: wp('3'),
    backgroundColor: COLORS?.white,
    borderColor: COLORS?.white,
    borderWidth: 1,
    borderRadius: 16,
    alignSelf: 'center',
  },
  text: {
    marginLeft: wp('2'),
  },
  contact: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS?.white,
    marginBottom: 20,
  },
});

export default style;

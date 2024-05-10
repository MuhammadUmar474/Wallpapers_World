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
    width: wp('10'),
    borderRadius: wp('10'),
    height: wp('10'),
  },
  listItem: {marginTop: hp('2'), flexDirection: 'row'},
  listText: {
    color: COLORS?.white,
    marginLeft: wp('6'),
    textAlignVertical: 'center',
  },
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
  backGroundImg: {height: hp('100'), width: wp('100')},
  Container2: selectedColor => ({
    backgroundColor: selectedColor
      ? 'rgba(58, 57, 64, 0.6)'
      : COLORS?.btnBackground,
    height: hp('100'),
    paddingHorizontal: wp('5'),
  }),
});

export default style;

import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../../shared/theme';
import {wp, hp} from '../../../utils/dimensionUtils/dimensions';

interface Styles {
  container: (selectedColor: boolean) => ViewStyle;
  listText: (selectedColor: boolean) => TextStyle;
  Heading: (selectedColor: boolean) => TextStyle;
  listItem: Object;
  listImg: Object;
  InnerContainer: Object;
}

const style: Styles = StyleSheet.create<Styles>({
  container: selectedColor => ({
    flex: 1,
    backgroundColor: selectedColor ? COLORS.background : COLORS?.white,
  }),
  IconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS?.white,
    padding: 4,
  },
  listItem: {marginTop: hp('3'), flexDirection: 'row'},
  listText: selectedColor => ({
    color: selectedColor ? COLORS?.white : COLORS?.black,
    marginLeft: wp('6'),
  }),
  listImg: {height: 30, width: 30, borderColor: COLORS?.white, borderWidth: 1},
  InnerContainer: {marginHorizontal: wp('5')},
  Heading: selectedColor => ({
    color: selectedColor ? COLORS.white : COLORS?.black,
    textAlign: 'center',
    marginVertical: hp('4'),
  }),
});

export default style;

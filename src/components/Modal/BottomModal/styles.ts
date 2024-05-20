import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {hp, wp} from '../../../utils/dimensionUtils/dimensions';
import {COLORS} from '../../../shared/theme';

interface Styles {
  modalContainer: (selectedColor: boolean) => ViewStyle;
  container1: (selectedColor: boolean) => ViewStyle;
  heading: (selectedColor: boolean) => TextStyle;
  contentContainer:ViewStyle,
  icon:ViewStyle,
  row:ViewStyle,
  content:ViewStyle,
  bottomModalWrapper:ViewStyle
}
// @ts-ignore
const styles: Styles = StyleSheet.create<Styles>({
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
  modalContainer: (selectedColor)=>({
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor:!selectedColor ? COLORS.white : COLORS?.background,
  }),
  contentContainer: {
    flex: 1,
  },
  heading:(selectedColor)=>({
    color:!selectedColor?  COLORS.black : COLORS?.white,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  }),
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

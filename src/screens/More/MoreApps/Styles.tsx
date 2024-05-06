import {StyleSheet} from 'react-native';
import { COLORS } from '../../../shared/theme';
import { wp,hp } from '../../../utils/dimensionUtils/dimensions';


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  IconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS?.white,
    padding: 4,
  },
  listItem:{marginTop:hp('3') , flexDirection:'row'},
  listText:{color:COLORS?.white , marginLeft:wp('6')},
  listImg:{height:30,width:30,borderColor:COLORS?.white,borderWidth:1},
  InnerContainer:{marginHorizontal: wp('5')},
  Heading:{color: COLORS.white,textAlign:'center',marginVertical: hp('4'),}
});

export default style;

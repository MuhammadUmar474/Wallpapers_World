import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';

const W_WIDTH = Dimensions.get('window').width;
const W_HEIGHT = Dimensions.get('window').height;
const S_WIDTH = Dimensions.get('screen').width;
const S_HEIGHT = Dimensions.get('screen').height;

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
// ios small device
const isd = isIOS && W_HEIGHT < 675;

export {wp, hp, W_WIDTH, W_HEIGHT, S_WIDTH, S_HEIGHT, isIOS, isAndroid, isd};

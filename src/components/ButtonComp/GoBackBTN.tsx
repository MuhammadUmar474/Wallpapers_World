import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../shared/theme';
import styles from './styles';

const GoBackBtn = () => {
  return (
    <TouchableOpacity
      style={styles.backBtn}
      activeOpacity={0.5}
      onPress={() => {}}>
      {/* <Image source={ImgsPath.arrowLeft} style={{height: 24, width: 24}} /> */}
    </TouchableOpacity>
  );
};

export default GoBackBtn;

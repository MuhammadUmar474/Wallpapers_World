import {StatusBar} from 'react-native';

import {COLORS} from '../../shared/theme';

export const StatusBarComp = () => {
  return <StatusBar backgroundColor={COLORS.black} barStyle={'dark-content'} />;
};

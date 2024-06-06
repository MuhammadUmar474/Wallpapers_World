import {Alert, Linking} from 'react-native';
import {W_HEIGHT, isIOS, isAndroid} from '../dimensionUtils/dimensions';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const settings = {
  openSettings: (type: string) => {
    let title = 'Required ' + capitalize(type) + ' Permission';

    if (isIOS) {
      Alert.alert(title, 'Please enable it in the settings.', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          isPreferred: true,
          onPress: () => Linking.openSettings(),
        },
      ]);
    } else {
      Alert.alert(title, 'Please enable it in the settings.', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          isPreferred: true,
          onPress: () => Linking.openSettings(),
        },
      ]);
    }
  },

  openEmail: (email: string) => Linking.openURL(`mailto:${email}`),
};

export const calculations = {
  screenRatio: () => {
    if (isAndroid && W_HEIGHT < 800) {
      let ratio = parseFloat(
        ((W_HEIGHT * 0.001) / 1.79 + 0.16).toString(),
      ).toFixed(2);
      return ratio;
    } else if (isAndroid && W_HEIGHT >= 800) {
      let ratio = (W_HEIGHT * 0.001) / 1.79 + 0.11;
      return ratio;
    }
  },
};

import {Alert, Linking, Platform} from 'react-native';
import {W_HEIGHT} from '../dimensionUtils/dimensions';

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

// ios small device
export const isd = isIOS && W_HEIGHT < 675;

export const os_ver = Platform.Version;

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const settings = {
  openSettings: (type: any) => {
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
          onPress: () => {
            // @ts-ignore
            Linking.openSettings('app-settings:');
          },
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
          onPress: () => {
            // @ts-ignore
            Linking.openSettings('android.settings.SETTINGS');
          },
        },
      ]);
    }
  },
  openEmail: (mail: string) => Linking.openURL(`mailto:${mail}`),
};

import Toast from 'react-native-simple-toast';

export const showToast = (message: string) => {
  Toast.showWithGravity(message.toString(), Toast.LONG, Toast.BOTTOM);
};

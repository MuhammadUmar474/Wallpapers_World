import {isIOS} from '../dimensionUtils/dimensions';
import {check, request, PERMISSIONS} from 'react-native-permissions';
import {settings} from '../helperUtils/helperUtils';
import {os_ver} from '../platformUtils/platformCheck';

export const permission = {
  handleGalleryPermission: async (flag = true, callback?: any) => {
    let res = '';
    if (flag) {
      if (isIOS) {
        res = await check(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
      } else if (os_ver > '32') {
        res = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      } else {
        res = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      }

      if (res != 'granted')
        return permission.handlePermissionCases(res, 'Gallery', callback);
    } else {
      if (isIOS) {
        res = await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
      } else if (os_ver > '32') {
        res = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      } else {
        res = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      }

      if (res == 'granted') callback();
      else return permission.handlePermissionCases(res, 'Gallery', callback);
    }
  },

  handlePermissionCases: (res: string, mediaType: string, callback?: void) => {
    switch (res) {
      case 'denied':
        permission.handleGalleryPermission(false, callback);
        return 'denied';

      case 'granted':
        permission.handleGalleryPermission(false, callback);
        return 'granted';

      case 'blocked':
        settings.openSettings(mediaType);
        return 'blocked';

      case 'limited':
        settings.openSettings(mediaType);
        return 'limited';

      case 'unavailable':
        settings.openSettings(mediaType);
        return 'unavailable';
    }
  },
};

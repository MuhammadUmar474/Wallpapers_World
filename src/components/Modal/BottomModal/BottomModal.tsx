import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {check, request, PERMISSIONS} from 'react-native-permissions';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import RNFetchBlob from 'rn-fetch-blob';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import styles from './styles';
import {COLORS} from '../../../shared/theme';
import {Text14, Text16} from '../../Text/Text';
import HorizontalView from '../../HorizontalView/HorizontalView';
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from '../../../shared/vectorIcons';
import {isAndroid, isIOS} from '../../../utils/dimensionUtils/dimensions';
import {os_ver, settings} from '../../../utils/platformUtils/platformCheck';

const BottomModal = ({visible, setVisible, uri}: any) => {
  const snapPoints = useMemo(() => ['37%'], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  let imgUrl = uri;

  let newImgUri = imgUrl.lastIndexOf('/');
  let imageName = imgUrl.substring(newImgUri);

  let dirs = RNFetchBlob.fs.dirs;
  let path = isIOS
    ? dirs['MainBundleDir'] + imageName
    : dirs.PictureDir + imageName;

  const handlePermissionCases = (res: string, mediaType: string) => {
    switch (res) {
      case 'denied':

      case 'blocked':
        settings.openSettings(mediaType);
        break;

      case 'limited':
        settings.openSettings(mediaType);
        break;

      case 'unavailable':
        settings.openSettings(mediaType);
        break;
    }
  };

  const handleGetGalleryPermission = async (flag = true) => {
    let res = '';
    if (flag) {
      if (os_ver > '32') {
        res = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      } else {
        res = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      }

      return handlePermissionCases(res, 'gallery');
    } else {
      if (os_ver > '32') {
        res = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      } else {
        res = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      }

      if (res == 'granted') {
      } else return handlePermissionCases(res, 'gallery');
    }
  };

  // const saveToGallery = () => {
  //   console.log('saveToGallery');
  //   if (isAndroid) {
  //     RNFetchBlob.config({
  //       fileCache: true,
  //       appendExt: 'png',
  //       indicator: true,
  //       IOSBackgroundTask: true,
  //       path: path,
  //       addAndroidDownloads: {
  //         useDownloadManager: true,
  //         notification: true,
  //         path: path,
  //         description: 'Image',
  //       },
  //     })
  //       .fetch('GET', imgUrl)
  //       .then(res => {
  //         console.log(res, 'end downloaded');
  //       });
  //   } else {
  //     CameraRoll.saveAsset(uri)
  //       .then(() => {
  //         console.log('saved', {type: 'photo'});
  //       })
  //       .catch(error => {
  //         console.error('Error saving image to camera roll:', error);
  //       });
  //   }
  // };

  const handleDownload = async () => {
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', uri)
      .then(res => {
        CameraRoll.saveAsset(res.data)
          .then(res => {
            console.log('res', res);
            Alert.alert('Image Saved To Gallery', '', [{text: 'OK'}]);
            setVisible(false);
          })
          .catch(err => console.log('err', err));
      });
  };

  useEffect(() => {
    if (visible) handlePresentModalPress();
  }, [visible]);

  useEffect(() => {
    handleGetGalleryPermission();
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, [visible]);

  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) setVisible(false);
  }, []);

  return (
    <View style={[styles.bottomModalWrapper, {zIndex: visible ? 1 : -1}]}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <BottomSheetModal
            backgroundStyle={styles.modalContainer}
            handleIndicatorStyle={{backgroundColor: COLORS.borderColor}}
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <BottomSheetView style={styles.contentContainer}>
              <Text16 textStyle={styles.heading}>
                What would you like to do?
              </Text16>

              <View style={styles.content}>
                <TouchableOpacity>
                  <HorizontalView
                    style={styles.row}
                    justifyContent={'flex-start'}>
                    <MaterialCommunityIcons
                      style={styles.icon}
                      name="cellphone"
                      size={20}
                      color={COLORS.black}
                    />
                    <Text14>Set on home screen</Text14>
                  </HorizontalView>
                </TouchableOpacity>

                <TouchableOpacity>
                  <HorizontalView
                    style={styles.row}
                    justifyContent={'flex-start'}>
                    <MaterialIcons
                      style={styles.icon}
                      name="screen-lock-portrait"
                      size={20}
                      color={COLORS.black}
                    />
                    <Text14>Set on lock screen</Text14>
                  </HorizontalView>
                </TouchableOpacity>

                <TouchableOpacity>
                  <HorizontalView
                    style={styles.row}
                    justifyContent={'flex-start'}>
                    <MaterialCommunityIcons
                      style={styles.icon}
                      name="cellphone-lock"
                      size={20}
                      color={COLORS.black}
                    />
                    <Text14>Set on both screen</Text14>
                  </HorizontalView>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleDownload}>
                  <HorizontalView
                    style={styles.row}
                    justifyContent={'flex-start'}>
                    <MaterialCommunityIcons
                      style={styles.icon}
                      name="download"
                      size={20}
                      color={COLORS.black}
                    />
                    <Text14>Save to device</Text14>
                  </HorizontalView>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </View>
  );
};

export default BottomModal;

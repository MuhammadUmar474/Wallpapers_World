import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
// @ts-ignore
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';

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
import {isIOS} from '../../../utils/dimensionUtils/dimensions';
import {permission} from '../../../utils/permissionUtils/permissionUtils';
import {showToast} from '../../Toast/Toast';
import AppContext from '../../../context/AppContext';

interface BottomModalProps {
  visible: boolean;
  uri: string;
  setVisible: (visible: boolean) => void;
}

const BottomModal: React.FC<BottomModalProps> = ({
  visible,
  setVisible,
  uri,
}) => {
  const snapPoints = useMemo(() => ['37%'], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {selectedColor} = useContext(AppContext);

  const setWallpaper = (type: string) => {
    ManageWallpaper.setWallpaper(
      {
        uri: uri,
      },
      () => {
        showToast('Wallpaper Updated');
        setVisible(false);
      },
      type === 'home' ? TYPE.HOME : type === 'lock' ? TYPE.LOCK : TYPE.BOTH,
    );
  };

  let imgUrl = uri;

  let newImgUri = imgUrl.lastIndexOf('/');
  let imageName = imgUrl.substring(newImgUri);

  let dirs = RNFetchBlob.fs.dirs;
  let path = isIOS
    ? dirs['MainBundleDir'] + imageName
    : dirs.PictureDir + imageName;

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
            showToast('Downloaded');
            setVisible(false);
          })
          .catch(err => console.log('err', err));
      });
  };

  useEffect(() => {
    if (visible) handlePresentModalPress();
  }, [visible]);

  useEffect(() => {
    permission.handleGalleryPermission(true, callback);
  }, []);

  const callback = () => {
    console.log('callback ran');
  };

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
            backgroundStyle={styles.modalContainer(selectedColor)}
            handleIndicatorStyle={{backgroundColor: COLORS.borderColor}}
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <BottomSheetView style={styles.contentContainer}>
              <Text16 textStyle={styles.heading(selectedColor)}>
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
                      color={!selectedColor ? COLORS.black : COLORS?.white}
                    />
                    <Text14
                      textStyle={{color: selectedColor ? COLORS.white : COLORS?.black}}
                      onPress={() => setWallpaper('home')}>
                      Set on home screen
                    </Text14>
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
                      color={!selectedColor ? COLORS.black : COLORS?.white}
                    />
                    <Text14
                      textStyle={{color: selectedColor ? COLORS.white : COLORS?.black}}
                      onPress={() => setWallpaper('lock')}>
                      Set on lock screen
                    </Text14>
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
                      color={!selectedColor ? COLORS.black : COLORS?.white}
                    />
                    <Text14
                      textStyle={{color: selectedColor ? COLORS.white : COLORS?.black}}
                      onPress={() => setWallpaper('both')}>
                      Set on both screen
                    </Text14>
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
                      color={!selectedColor ? COLORS.black : COLORS?.white}
                    />
                    <Text14 textStyle={{color: selectedColor ? COLORS.white : COLORS?.black}}>
                      Save to device
                    </Text14>
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

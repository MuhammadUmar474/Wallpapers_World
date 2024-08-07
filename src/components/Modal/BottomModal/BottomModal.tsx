import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {View, TouchableOpacity, BackHandler} from 'react-native';
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
import {permission} from '../../../utils/permissionUtils/permissionUtils';
import {showToast} from '../../Toast/Toast';
import BannerAdComponent from '../../BannerAd';
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
  const modalBannerAdId = 'ca-app-pub-2587642180140061/7634473390';
  const snapPoints = useMemo(() => ['45%'], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {selectedColor} = useContext(AppContext);

  const setWallpaper = async (type: string) => {
    const res = await permission.handleGalleryPermission(true, callback);
    if (res == 'granted') {
      ManageWallpaper.setWallpaper(
        {
          uri: uri,
        },
        () => {
          showToast('Wallpaper Updated');
          setVisible(false);
          BackHandler.exitApp();
        },
        type === 'home' ? TYPE.HOME : type === 'lock' ? TYPE.LOCK : TYPE.BOTH,
      );
    }
  };

  const handleDownload = async () => {
    const res = await permission.handleGalleryPermission(true, callback);
    if (res == 'granted') {
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
    }
  };

  useEffect(() => {
    if (visible) handlePresentModalPress();
  }, [visible]);

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
              <BannerAdComponent bannerAdId={modalBannerAdId} />
              <Text16 textStyle={styles.heading(selectedColor)}>
                What would you like to do?
              </Text16>

              <View style={styles.content}>
                <TouchableOpacity onPress={() => setWallpaper('home')}>
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
                      textStyle={{
                        color: selectedColor ? COLORS.white : COLORS?.black,
                      }}>
                      Set on home screen
                    </Text14>
                  </HorizontalView>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setWallpaper('lock')}>
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
                      textStyle={{
                        color: selectedColor ? COLORS.white : COLORS?.black,
                      }}>
                      Set on lock screen
                    </Text14>
                  </HorizontalView>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setWallpaper('both')}>
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
                      textStyle={{
                        color: selectedColor ? COLORS.white : COLORS?.black,
                      }}>
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
                    <Text14
                      textStyle={{
                        color: selectedColor ? COLORS.white : COLORS?.black,
                      }}>
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

import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
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

const BottomModal = ({visible, setVisible}: any) => {
  const snapPoints = useMemo(() => ['37%'], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (visible) handlePresentModalPress();
  }, [visible]);

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

                <TouchableOpacity>
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

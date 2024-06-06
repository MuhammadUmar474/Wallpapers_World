import React from 'react';
import {LogBox, View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TestIds} from 'react-native-google-mobile-ads';

import {COLORS} from './src/shared/theme';
import {AppProvider} from './src/context/AppContext';
import Route from './src/navigation/route';
import useAppOpenAd from './src/hooks/useAppOpenAd';

LogBox.ignoreAllLogs();

// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;

const App = () => {
  // const appOpenAdId = 'ca-app-pub-2587642180140061/3807356136';
  const appOpenAdId = TestIds.APP_OPEN;
  const theme = useTheme();
  theme.colors.secondaryContainer = COLORS.transparent; // or "white" wh

  useAppOpenAd(appOpenAdId);
  return (
    <AppProvider>
      <View style={{flex: 1}}>
        <Route />
      </View>
    </AppProvider>
  );
};

export default App;

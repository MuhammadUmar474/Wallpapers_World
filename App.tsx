import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';

import Route from './src/navigation/route';
import {COLORS} from './src/shared/theme';
import { AppProvider } from './src/context/AppContext';

const App = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = COLORS.transparent; // or "white" wh

  return (
    <AppProvider>
    <View style={{flex: 1}}>
      <Route />
    </View>
    </AppProvider>
  );
};

export default App;

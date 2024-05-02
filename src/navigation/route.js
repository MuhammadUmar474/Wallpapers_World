import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {StatusBarComp} from '../components/StatusBar/StatusBar';
import Explore from '../screens/Explore/Explore';
import Likes from '../screens/Likes/Likes';
import {navigationRef} from './rootNavigation';
import Home from '../screens/Home/Home';
import {hp, wp} from '../utils/dimensionUtils/dimensions';
import {Entypo} from '../shared/vectorIcons';
import {COLORS} from '../shared/theme';
import {StyleSheet, View} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

// EXPLORE
const ExploreStack = createNativeStackNavigator();
function ExploreScreens() {
  return (
    <ExploreStack.Navigator screenOptions={{headerShown: false}}>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="BottomTab" component={BottomTab} />
    </ExploreStack.Navigator>
  );
}

// LIKE SCREEN STACK
const LikesStack = createNativeStackNavigator();
function LikesScreens() {
  return (
    <LikesStack.Navigator screenOptions={{headerShown: false}}>
      <LikesStack.Screen name="Likes" component={Likes} />
    </LikesStack.Navigator>
  );
}
const BottomTab = () => (
  <Tab.Navigator labeled={false} barStyle={styles.barStyle}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color, focused}) => (
          <View style={[styles.tabStyle, !focused && styles.inactiveBg]}>
            <Entypo name="home" size={wp('6')} color={color} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Like"
      component={LikesScreens}
      options={{
        tabBarIcon: ({color, focused}) => (
          <View style={[styles.tabStyle, !focused && styles.inactiveBg]}>
            <Entypo name="heart" size={wp('6')} color={color} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarIcon: ({color, focused}) => (
          <View style={[styles.tabStyle, !focused && styles.inactiveBg]}>
            <Entypo name="grid" size={wp('6.5')} color={color} />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

// ROUTE
function Route() {
  return (
    <NavigationContainer ref={navigationRef}>
      <>
        <StatusBarComp />
        <ExploreScreens />
      </>
    </NavigationContainer>
  );
}

export default Route;

const styles = StyleSheet.create({
  barStyle: {
    height: hp('7'),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    backgroundColor: COLORS.transparent,
    marginHorizontal: wp(8),
    padding: 2,
    borderRadius: wp('20'),
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    overflow: 'hidden',
  },
  tabStyle: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('27'),
    height: hp('6'),
    marginTop: hp('0.5'),
    borderRadius: wp('20'),
  },
  inactiveBg: {
    backgroundColor: COLORS.transparent,
  },
});

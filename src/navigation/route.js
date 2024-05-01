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

// MAIN TAB
// const MainTabs = createBottomTabNavigator();
// function MainTabsScreen() {
//   const {selectedColor} = useContext(AppContext);
//   return (
//     <MainTabs.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: selectedColor ? COLORS?.white : COLORS.black,
//         headerShown: false,
//         tabBarStyle: {
//           borderTopWidth: 0,
//           backgroundColor: selectedColor ? COLORS?.black : COLORS?.white,
//         },
//       }}>
//       <MainTabs.Screen
//         name="Quote"
//         component={QuotesScreens}
//         options={{
//           tabBarLabel: 'Quotes',
//           tabBarIcon: ({focused}) => (
//             <MaterialCommunityIcons
//               name={focused ? 'comment-quote' : 'comment-quote-outline'}
//               size={25}
//               color={
//                 focused
//                   ? selectedColor
//                     ? COLORS?.white
//                     : COLORS?.black
//                   : COLORS?.gray
//               }
//             />
//           ),
//         }}
//       />
//       <MainTabs.Screen
//         name="Like"
//         component={LikesScreens}
//         options={{
//           tabBarLabel: 'Likes',
//           tabBarIcon: ({focused}) => (
//             <MaterialCommunityIcons
//               name={focused ? 'cards-heart' : 'cards-heart-outline'}
//               size={25}
//               color={
//                 focused
//                   ? selectedColor
//                     ? COLORS?.white
//                     : COLORS?.black
//                   : COLORS?.gray
//               }
//             />
//           ),
//         }}
//       />
//       <MainTabs.Screen
//         name="Support"
//         component={SupportScreens}
//         options={{
//           tabBarLabel: 'Support',
//           tabBarIcon: ({focused}) => (
//             <MaterialCommunityIcons
//               name={focused ? 'alpha-s-circle' : 'alpha-s-circle-outline'}
//               size={25}
//               color={
//                 focused
//                   ? selectedColor
//                     ? COLORS?.white
//                     : COLORS?.black
//                   : COLORS?.gray
//               }
//             />
//           ),
//         }}
//       />
//     </MainTabs.Navigator>
//   );
// }

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
    <Tab.Screen
      name="Likes"
      component={Likes}
      options={{
        tabBarIcon: ({color, focused}) => (
          <View style={[styles.tabStyle, !focused && styles.inactiveBg]}>
            <Entypo name="heart" size={wp('6')} color={color} />
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

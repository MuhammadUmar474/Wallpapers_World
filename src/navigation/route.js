import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StatusBarComp} from '../components/StatusBar/StatusBar';
import Explore from '../screens/Explore/Explore';
import Likes from '../screens/Likes/Likes';
import {navigationRef} from './rootNavigation';
import Home from '../screens/Home/Home';

// EXPLORE
const ExploreStack = createNativeStackNavigator();
function ExploreScreens() {
  return (
    <ExploreStack.Navigator screenOptions={{headerShown: false}}>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Home" component={Home} />
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

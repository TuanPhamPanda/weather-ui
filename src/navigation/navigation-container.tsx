import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, LatestScreen, SplashScreen, SearchScreen} from '../screens';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Latest: undefined;
};

const screens = {
  Home: {
    component: HomeScreen,
  },
  Latest: {
    component: LatestScreen,
  },
  Splash: {
    component: SplashScreen,
  },
  Search: {
    component: SearchScreen,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Latest"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#171C2A'},
        }}>
        {Object.keys(screens).map(name => (
          <Stack.Screen
            key={name}
            name={name as keyof RootStackParamList}
            component={screens[name as keyof RootStackParamList].component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;

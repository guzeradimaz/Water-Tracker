import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeCalculator} from '../screens/WelcomeCalculator/WelcomeCalculator';
import { Home } from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const screenOptions = {headerShown: false};

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={screenOptions}
          name="WelcomeCalculator"
          component={WelcomeCalculator}
        />
        <Stack.Screen
          options={screenOptions}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </>
  );
};

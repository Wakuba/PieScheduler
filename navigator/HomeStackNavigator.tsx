import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeClockScreen from  '../screens/HomeClockScreen';
import WholeEditScreen from '../screens/WholeEditScreen';
import ScheduleEditScreen from '../screens/ScheduleEditScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='HomeClock'
        component={HomeClockScreen}
      />
      <Stack.Screen 
        name='Edit'
        component={WholeEditScreen} 
      />
      <Stack.Screen
        name='PreEdit' 
        component={ScheduleEditScreen}
      />
    </Stack.Navigator>
  );
};
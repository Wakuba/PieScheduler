import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeClockScreen} from  '../screens/HomeClockScreen';
import {ScheduleEditScreen} from '../screens/ScheduleEditScreen';

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
        component={ScheduleEditScreen} 
      />
    </Stack.Navigator>
  );
};
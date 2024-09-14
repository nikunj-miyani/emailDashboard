import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboard1 from '../screens/login/Onboard1';
import Onboard2 from '../screens/login/Onboard2';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboard1" component={Onboard1} />
      <Stack.Screen name="Onboard2" component={Onboard2} />
    </Stack.Navigator>
  );
};

export {RootNavigator};

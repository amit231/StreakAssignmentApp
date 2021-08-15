import React from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserForm from '../screens/UserForm'


const Stack = createStackNavigator();
export default function App() {
  const dim = useWindowDimensions();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName={token ? 'ReferralManagerTab' : 'OnBoarding'}
          screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="UserForm" component={UserForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

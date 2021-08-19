import React from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Form from '../screens/Form'
import Home from '../screens/Home';
import Test from '../screens/Test'
const Stack = createStackNavigator();
export default function App() {
  const dim = useWindowDimensions();
  const userState = useSelector(state => state.usersReducer);
  console.log(userState)
  const user = userState?.firstName
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user ? 'Home' : 'Form'}
          // initialRouteName='Test'
          screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HomeScreen} from 'src/scenes/Home/screens/HomeScreen';
import {ProductDetail} from 'src/scenes/Home/screens/ProductDetail';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="ProductDetail"
          options={{headerShown: false}}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

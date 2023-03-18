import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HomeScreen} from 'src/scenes/Home/screens/HomeScreen';
import {ProductDetail} from 'src/scenes/Home/screens/ProductDetail';
import {RootStackParamList, ROUTE_HOME, ROUTE_PROD_DETAIL} from './Routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE_HOME}
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name={ROUTE_PROD_DETAIL}
          options={{headerShown: false}}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

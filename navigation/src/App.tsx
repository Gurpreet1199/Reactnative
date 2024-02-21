/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Home from './screens/home';
import Details from './screens/details';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
export type RootStackParamList={
  Home: undefined;
  Details:{productId:string}
};
const Stack=createNativeStackNavigator<RootStackParamList>()
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:"Trending Products"
        }
        }/>
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title:"Details!"
        }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPic from '.screens/DailyMap';
import SpaceCrafts from '.screens/SpaceCrafts';
import StarMap from '.screens/StarMap'
import {NavigationContainer} from '@react-navigation\native';
import {createStackNavigator} from '@react-navigation\stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
      <Stack.Screen name="DailyPic" component={DailyPic}/>
      <Stack.Screen name="StarMap" component={StarMap}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

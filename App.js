/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import SingleItemScreen from './screens/SingleItemScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import FavoriteContextProvider from './context/context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={24} />;
          },
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="star" size={24} />;
          },
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={TabNavigator} />
          <Stack.Screen name="SingleItem" component={SingleItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({});

export default App;

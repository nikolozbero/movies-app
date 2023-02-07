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

import store from './store/store';
import {Provider} from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import SingleItemScreen from './screens/SingleItemScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WatchedScreen from './screens/WatchedScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Watched" component={WatchedScreen} />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Tab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={24} color={color} />;
          },
          tabBarLabelStyle: {fontSize: 14},
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="star" size={24} color={color} />;
          },
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="SingleItem" component={SingleItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;

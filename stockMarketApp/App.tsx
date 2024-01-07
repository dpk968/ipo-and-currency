/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import { AuthProvider, useAuth } from './auth/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  const { user,pass } = useAuth();
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar backgroundColor={'#FB3640'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        {user & pass ? (
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            )}
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0D222B',
    height: '100%',
  },
  textColor: {
    color: '#fff',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  topMsg: {
    fontSize: 30,
  },
});

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;

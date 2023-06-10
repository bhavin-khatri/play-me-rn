import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../components/auth/Login';
import {navigationConstant} from '../constants/NavigationConstant';
import {Dashboard} from '../components/dashboard/Dashboard';
import {IntroScreen} from '../components/intro/IntroScreen';
import {NativeBaseProvider} from 'native-base';
import {MusicList} from '../components/music/musicList/MusicList';
import {MusicDetails} from '../components/music/musicDetails/MusicDetails';

const Stack = createStackNavigator();
export const CoreAppStack = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="IntroScreen">
        <Stack.Screen name={navigationConstant.LOGIN} component={Login} />
        <Stack.Screen
          name={navigationConstant.MUSIC_LIST}
          component={MusicList}
        />
        <Stack.Screen
          name={navigationConstant.MUSIC_DETAILS}
          component={MusicDetails}
        />
        <Stack.Screen
          name={navigationConstant.DASHBOARD}
          component={Dashboard}
        />
        <Stack.Screen
          name={navigationConstant.INTRO_SCREEN}
          component={IntroScreen}
        />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

import React from 'react';
import Welcome from './src/pages/Welcome';
import UserIdentification from './src/pages/UserIdentification';
import UserConfirmation from './src/pages/UserConfirmation';
import { useFonts , Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import Orientation from 'react-native-orientation';

import Routes from './src/routes/'
import {  View, Platform , StatusBar } from 'react-native';

export default function App() {

  Orientation.lockToPortrait 

  const[ fontsLoaded ] = useFonts ({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded){
    return (
    <AppLoading />
    )
  }

  return (
    <Routes />
  )
}
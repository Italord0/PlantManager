import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, Image, View } from 'react-native';
import { Style } from '../styles/views/welcome/style'
import { RoundButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("UserIdentification")
  }

  return (
    <SafeAreaView style={Style.container}>
      <StatusBar style="dark" />

      <Text style={Style.title}>Gerencie suas plantas de forma fácil! 🌱</Text>

      <Image resizeMode="contain" style={Style.image} source={require('../assets/watering.png')} />

      <Text style={Style.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar!</Text>

      <RoundButton leftIcon="arrow-forward" leftIconSize={24} style={Style.roundButton} onPress={handleNavigation} />
    </SafeAreaView>
  );
}
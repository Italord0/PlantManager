import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView , Image} from 'react-native';
import { WelcomeStyle } from '../styles/welcome_style' 
import { RoundButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("UserIdentification")
  }

    return (
      <SafeAreaView style={WelcomeStyle.container}>
                <StatusBar style="dark" />

        <Text style={WelcomeStyle.title}>Gerencie suas plantas de forma fácil! 🌱</Text>

        <Image resizeMode = "contain" style={WelcomeStyle.image} source = {require('../assets/watering.png')} />

        <Text style={WelcomeStyle.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar!</Text>

        <RoundButton leftIcon = "arrow-forward" leftIconSize = {24} style={WelcomeStyle.roundButton} onPress = {handleNavigation} />

      </SafeAreaView>
    );
  }
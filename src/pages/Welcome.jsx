import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView , Image , TouchableOpacity} from 'react-native';
import { WelcomeStyle } from '../styles/wlcome_style' 
import { RoundButton } from '../components/buttons'

export default function App() {
    return (
      <SafeAreaView style={WelcomeStyle.container}>
                <StatusBar style="dark" />

        <Text style={WelcomeStyle.title}>Gerencie suas plantas de forma fácil!</Text>

        <Image style={WelcomeStyle.image} source = {require('../assets/watering.png')} />

        <Text style={WelcomeStyle.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar!</Text>

        <RoundButton leftIcon = "arrow-forward" leftIconSize = {24} onPress = { () => console.log("Teste") } />

      </SafeAreaView>
    );
  }
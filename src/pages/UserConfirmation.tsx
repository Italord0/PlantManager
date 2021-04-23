import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView , Image , TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { UserConfirmationStyle } from '../styles/userConfirmation_style' 
import { RoundButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation()

  function handleConfirm() {
    navigation.navigate("PlantSelect")
  }

    return (
      <SafeAreaView style={UserConfirmationStyle.container}>
          <View style= {UserConfirmationStyle.content} >

              <View style= {UserConfirmationStyle.form} >
                
                <View>
                <Text style = {UserConfirmationStyle.emoji}> 😁 </Text>
                </View>

                <View>
                <Text style = {UserConfirmationStyle.title}>Tudo certo!</Text>
                </View>

                <View>
                <Text style = {UserConfirmationStyle.subtitle}>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Text>
                </View>

                <RoundButton title = "COMEÇAR" style={UserConfirmationStyle.buttonConfirmar} onPress = {handleConfirm} />

              </View>

          </View>
      </SafeAreaView>
    );
  }
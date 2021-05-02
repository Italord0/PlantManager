import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView , Image , TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { Style } from '../styles/views/userConfirmation/style' 
import { RoundButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation()

  function handleConfirm() {
    navigation.navigate("PlantSelect")
  }

    return (
      <SafeAreaView style={Style.container}>
          <View style= {Style.content} >

              <View style= {Style.form} >
                
                <View>
                <Text style = {Style.emoji}> 😁 </Text>
                </View>

                <View>
                <Text style = {Style.title}>Tudo certo!</Text>
                </View>

                <View>
                <Text style = {Style.subtitle}>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Text>
                </View>

                <RoundButton title = "COMEÇAR" style={Style.buttonConfirmar} onPress = {handleConfirm} />

              </View>

          </View>
      </SafeAreaView>
    );
  }
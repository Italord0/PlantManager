import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView , Image , TouchableWithoutFeedback , View, TextInput, KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import { UserIdentificationStyle } from '../styles/userIdentification_style' 
import { RoundButton , BackButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const [name, setName] = useState<String>();

  const navigation = useNavigation()

  function handleInputChange(value: string) {
    setName(value);
  }

  function handleSubmit() {
    navigation.navigate("UserConfirmation")
  }

    return (
      <SafeAreaView style={UserIdentificationStyle.container}>
        <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
          <KeyboardAvoidingView 
          style={UserIdentificationStyle.container}
          behavior = {Platform.OS === 'ios'? 'padding' : 'height'}>

            <BackButton style = {UserIdentificationStyle.backButton} />
          
              <View style= {UserIdentificationStyle.content} >

                <View style= {UserIdentificationStyle.form} >
                
                  <View>
                    <Text style = {UserIdentificationStyle.emoji}> {name == 'Golira' ? '🦍' : '😄'} </Text>
                  </View>

                  <View>
                    <Text style = {UserIdentificationStyle.title}> Como podemos chamar você? </Text>
                  </View>

                  <View style = {UserIdentificationStyle.inputBox}>

                    <TextInput onChangeText = {handleInputChange} placeholder = "Digite seu nome" style = {UserIdentificationStyle.input} />

                  </View>

                <RoundButton title = "CONFIRMAR" style={UserIdentificationStyle.buttonConfirmar} onPress = { handleSubmit } />

              </View>

          </View>
          </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
      </SafeAreaView>
      
    );
  }
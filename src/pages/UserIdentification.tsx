import React, { useState } from 'react';
import { Text, SafeAreaView , Image , TouchableWithoutFeedback , View, TextInput, KeyboardAvoidingView, Platform, Keyboard, Alert} from 'react-native';
import { Style } from '../styles/views/userIdentification/style' 
import { RoundButton , BackButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [name, setName] = useState<string>();

  const navigation = useNavigation()

  function handleInputChange(value: string) {
    setName(value);
  }

  async function handleSubmit() {
    if(!name){
      return Alert.alert('Diga-me como você se chama')
    }else {
      await AsyncStorage.setItem('@plantmanager:userName', name)
      navigation.navigate("UserConfirmation")    
    }
  }

    return (
      <SafeAreaView style={Style.container}>
        <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
          <KeyboardAvoidingView 
          style={Style.container}
          behavior = {Platform.OS === 'ios'? 'padding' : 'height'}>

            <BackButton/>
          
              <View style= {Style.content} >

                <View style= {Style.form} >
                
                  <View>
                    <Text style = {Style.emoji}>😄</Text>
                  </View>

                  <View>
                    <Text style = {Style.title}> Como podemos chamar você? </Text>
                  </View>

                  <View style = {Style.inputBox}>

                    <TextInput onChangeText = {handleInputChange} placeholder = "Digite seu nome" style = {Style.input} />

                  </View>

                <RoundButton title = "CONFIRMAR" style={Style.buttonConfirmar} onPress = { handleSubmit } />

              </View>

          </View>
          </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
      </SafeAreaView>
      
    );
  }
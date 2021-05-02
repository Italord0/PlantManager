import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Image, Platform, StyleSheet, Text, View } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import { BackButton, RoundButton } from '../components/buttons'
import { Style } from '../styles/views/plantSave/style'
import DateTimePicker , { Event } from '@react-native-community/datetimepicker'
import { isBefore , format } from 'date-fns'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface PlantParams {
    plant : {
        id: number;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: [string];
        frequency: {
        times: number;
        repeat_every: string;
        }
    }
}

export default function PlantSave () {

    const route = useRoute()
    const { plant } = route.params as PlantParams

    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios')

    function handleDateTime (_ : Event, dateTime : Date | undefined) {
        if(Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if (dateTime && isBefore(dateTime,new Date()) ) {
            setSelectedDateTime(new Date())
            return Alert.alert("Escolha um horário válido")
        }

        if (dateTime) {
            setSelectedDateTime(dateTime)
        }
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }

    return (
        <View style={Style.container}>

            <BackButton/>


            <View style={Style.plantInfo}>
                <SvgFromUri uri={plant.photo} height={150} width={150} />

            <Text style = {Style.plantName}> {plant.name} </Text>

            <Text style={Style.plantAbout}>
                {plant.about}
            </Text>

            </View>

            <View style = {Style.controller}>
                
                <View style = {Style.tipContainer}>
                    
                    <Image
                     source = {require('../assets/waterdrop.png')}
                     style = { Style.tipImage } >
                        
                    </Image>

                    <Text style = { Style.tipText } >
                        { plant.water_tips }
                    </Text>
                    
                </View> 

                <Text style={Style.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                {
                    showDatePicker && (
                    <DateTimePicker 
                        value = {selectedDateTime}
                        mode = "time"
                        onChange = {handleDateTime}
                    />
                    )
                }

                {
                    Platform.OS === 'android' && (
                        <TouchableOpacity style = {Style.dateTimePickerButton} onPress={ handleOpenDateTimePickerForAndroid }>
                        <Text style={Style.dataTimePickerText}>
                        {`Mudar ${format(selectedDateTime, 'HH:mm' )}`}
                        </Text>
                        </TouchableOpacity>
                    )
                }

                <RoundButton
                    style={Style.roundButton}
                    title="Cadastrar planta"
                    onPress = { () => {} }
                />

            </View>

        </View>
    )
}

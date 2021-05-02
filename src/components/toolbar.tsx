import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View, Image } from 'react-native';
import { Style } from '../styles/components/toolbar/style';

interface ToolbarProps {
    userName?: string;
    
}

function ToolBar({ userName , ...rest }: ToolbarProps) {

    const [user, setUser] = useState<string>()

    useEffect( ()=> {
        async function loadUser() {
            const userName = await AsyncStorage.getItem('@plantmanager:userName')
            setUser(userName || '')   
        }
        loadUser();
    },[])

    return (
        <View style={Style.container}>
            <View>
                <Text style= {Style.greeting} >Olá,</Text>
                <Text style= {Style.username} >{user}</Text>
            </View>
        <Image style= {Style.image} source = {require('../assets/italo.jpeg')}/>
    </View> 
    )
}

export { ToolBar }
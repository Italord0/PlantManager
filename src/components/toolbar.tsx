import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View, Image } from 'react-native';
import { ToolbarStyle } from '../styles/toolbar_style';

interface ToolbarProps {
    userName?: string;
    
}

function ToolBar({ userName , ...rest }: ToolbarProps) {
    return (
        <View style={ToolbarStyle.container}>
            <View>
                <Text style= {ToolbarStyle.greeting} >Olá,</Text>
                <Text style= {ToolbarStyle.username} >{userName}</Text>
            </View>
        <Image style= {ToolbarStyle.image} source = {require('../assets/italo.jpeg')}/>
    </View> 
    )
}

export { ToolBar }
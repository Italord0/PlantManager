import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { WelcomeStyle } from '../styles/welcome_style';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    leftIcon? : any,
    rightIcon? : any,
    leftIconSize? : number;
    rightIconSize? : number;
}

function RoundButton({ title , leftIcon , rightIcon , leftIconSize, rightIconSize , ...rest }: ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} {...rest}>
            <Text style={WelcomeStyle.buttonText}>
                <Ionicons size = { leftIconSize } name = { leftIcon } />
                {title}
                <Ionicons size = { rightIconSize } name = { rightIcon } />
            </Text>
        </TouchableOpacity>
    )
}

function SolidButton({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={WelcomeStyle.button} activeOpacity={0.7} {...rest}>
            <Text style={WelcomeStyle.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

function BackButton({ ...rest }: ButtonProps) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style = {{
            marginTop : 20,
            marginStart : 20
        }}  activeOpacity={0.7} {...rest} onPress = {() => {navigation.goBack()} } >
            <Ionicons size = {35} name= "arrow-back" />
        </TouchableOpacity>
    )
}

export { RoundButton, SolidButton , BackButton }
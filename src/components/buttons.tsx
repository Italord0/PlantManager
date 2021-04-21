import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { WelcomeStyle } from '../styles/wlcome_style';
import { Ionicons } from '@expo/vector-icons'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    leftIcon : any,
    rightIcon : any,
    leftIconSize : number;
    rightIconSize : number;
}

function RoundButton({ title , leftIcon , rightIcon , leftIconSize, rightIconSize , ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={WelcomeStyle.roundButton} activeOpacity={0.7} {...rest}>
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

export { RoundButton, SolidButton }
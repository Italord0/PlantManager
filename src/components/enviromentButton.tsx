import React from 'react';
import { Text } from 'react-native';
import { RectButton , RectButtonProps } from 'react-native-gesture-handler';
import { EnviromentButtonStyle } from '../styles/enviromentButton_style';

interface EnviromentButtonProps extends RectButtonProps {
    title?: string;
    active?: boolean;
}

function EnviromentButton({ title , active = false, ...rest }: EnviromentButtonProps) {
    return (
        <RectButton style = {[EnviromentButtonStyle.container , active && EnviromentButtonStyle.containerActive ]} {... rest } >
            <Text style = {[EnviromentButtonStyle.text , active && EnviromentButtonStyle.textActive ]}>{title}</Text>
        </RectButton>
    )
}

export { EnviromentButton }
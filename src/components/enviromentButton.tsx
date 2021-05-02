import React from 'react';
import { Text } from 'react-native';
import { RectButton , RectButtonProps } from 'react-native-gesture-handler';
import { Style } from '../styles/components/enviromentButton/style';

interface EnviromentButtonProps extends RectButtonProps {
    title?: string;
    active?: boolean;
}

function EnviromentButton({ title , active = false, ...rest }: EnviromentButtonProps) {
    return (
        <RectButton style = {[Style.container , active && Style.containerActive ]} {... rest } >
            <Text style = {[Style.text , active && Style.textActive ]}>{title}</Text>
        </RectButton>
    )
}

export { EnviromentButton }
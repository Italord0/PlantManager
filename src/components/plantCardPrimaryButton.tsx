import React from 'react';
import { Dimensions, Text } from 'react-native';
import { RectButton , RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { Style } from '../styles/components/plantCardButton/style';

interface PlantCardPrimaryButtonProps extends RectButtonProps {
    data: {
        name : string,
        photo : string
    }
}

function PlantCardPrimaryButton({ data , ...rest }: PlantCardPrimaryButtonProps) {
    return (
        <RectButton style = {Style.container}  {... rest } >
            <SvgFromUri uri = {data.photo} height = {Dimensions.get('window').height * 0.1}/>
            <Text style = {Style.text}>{ data.name }</Text>
        </RectButton>
    )
}

export { PlantCardPrimaryButton }
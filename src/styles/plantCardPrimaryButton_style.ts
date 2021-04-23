import { Platform, StatusBar, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';
import colors from './colors';
import fonts from './fonts';

const PlantCardPrimaryButtonStyle = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10,
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16,
        paddingHorizontal : 8,
        textAlign : 'center'
    }
})

export { PlantCardPrimaryButtonStyle }
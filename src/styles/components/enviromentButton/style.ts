import { StyleSheet } from 'react-native'
import colors from '../../colors';
import fonts from '../../fonts';

const Style = StyleSheet.create({
    container: {
        marginHorizontal : 5,
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text,
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    textActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
    }
})

export { Style }
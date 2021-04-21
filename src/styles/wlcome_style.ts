import { StyleSheet } from 'react-native'
import colors from './colors';

const WelcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 36,
        marginStart: 32,
        marginEnd: 32
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        marginStart: 22,
        marginEnd: 22
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 56,
        width: 128
    },
    roundButton: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image: {
        width: 292,
        height: 284,
    },
    buttonText: {
        justifyContent: 'center',
        color: colors.white,
        textAlign: 'center'
    }
})

export { WelcomeStyle }
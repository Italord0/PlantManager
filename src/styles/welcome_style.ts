import { StyleSheet , Dimensions } from 'react-native'
import colors from './colors';
import fonts from './fonts';


const WelcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily : fonts.heading,
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 40,
        marginStart: 32,
        marginEnd: 32
    },
    subtitle: {
        fontFamily : fonts.text,
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
        height: Dimensions.get('window').width * 0.6 
    },
    buttonText: {
        justifyContent: 'center',
        color: colors.white,
        textAlign: 'center'
    }
})

export { WelcomeStyle }
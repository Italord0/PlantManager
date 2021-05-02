import { StyleSheet } from 'react-native'
import colors from '../../colors';
import fonts from '../../fonts';

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    content : {
        flex : 1,
        width : '100%'
    },
    form : {
        flex : 1,
        justifyContent : 'center',
        paddingHorizontal : 16,
        alignItems : 'center'
    },
    emoji : {
        fontSize : 78
    },
    input : {
        color: colors.heading,
        width: '100%',
        fontSize: 20,
        alignContent : 'center',
        textAlign: 'center',
    },
    inputBox : {
        justifyContent : 'center',
        marginTop : 50,
        width : '100%',
        alignContent : 'center',
        borderRadius : 16,
        height : 70,
        backgroundColor : colors.green_light
    },
    title : {
        marginTop : 60,
        fontSize : 32,
        textAlign : 'center',
        color : colors.heading,
        fontFamily : fonts.heading
    },
    buttonConfirmar : {
        marginTop : 60,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: '70%'
    },
    subtitle: {
        marginTop : 60,
        fontFamily : fonts.text,
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 16,
        color: colors.heading
    }
})

export { Style }
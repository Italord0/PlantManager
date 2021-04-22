import { StyleSheet } from 'react-native'
import colors from './colors';
import fonts from './fonts';

const UserIdentificationStyle = StyleSheet.create({
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
        paddingHorizontal : 30,
        alignItems : 'center'
    },
    emoji : {
        fontSize : 44
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
        fontSize : 32,
        textAlign : 'center',
        color : colors.heading,
        fontFamily : fonts.heading
    },
    buttonConfirmar : {
        marginTop : 32,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: '60%'
    },
    backButton : {
        marginTop : 30,
        marginStart : 30
    }
})

export { UserIdentificationStyle }
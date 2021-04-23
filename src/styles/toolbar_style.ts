import { Dimensions, StyleSheet } from 'react-native'
import colors from './colors';
import fonts from './fonts';

const ToolbarStyle = StyleSheet.create({
    container: {
        paddingTop : 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get('window').width * 0.2
    },
    greeting: {
        fontSize : 32,
        color : colors.heading,
        fontFamily : fonts.text
    },
    username: {
        fontSize : 32,
        color : colors.heading,
        fontFamily : fonts.heading
    },
    image: {
        width : 80,
        height : 80,
        borderRadius : 40
    }
})

export { ToolbarStyle }
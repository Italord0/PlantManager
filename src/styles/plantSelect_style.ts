import { Platform, StatusBar, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';
import colors from './colors';
import fonts from './fonts';

const PlantSelectStyle = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    content: {
        paddingHorizontal : 20
    },
    title: {
        marginTop : 32,
        fontSize : 17,
        fontFamily : fonts.heading,
        color : colors.heading
    },
    subtitle: {
        fontSize : 17,
        fontFamily : fonts.text,
        color : colors.heading
    },
    enviromentList: {
        marginTop : 20,
        paddingHorizontal : 30
    },
    plantList: {
        paddingHorizontal : 10,
        paddingTop : 4,
        paddingBottom : 10
    },
    plants: {
        marginTop : 4,
        flex : 1,
        justifyContent: 'center'
    },
})

export { PlantSelectStyle }
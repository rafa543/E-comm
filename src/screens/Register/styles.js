import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
        },
        containerLogin: {
            marginHorizontal: 16,
        },
        input: {
            height: 60,
            width: '100%',
            paddingLeft: 55,
            paddingRight: 55,
            borderWidth: 1,
            padding: 10,
            borderWidth: 2,
            borderColor: '#EBF0FF',
            borderRadius: 5,
            marginBottom: 10,
            color: '#9098B1',
            fontWeight: 'bold'
        },
        icon: {
            position: 'absolute',
            top: 20,
            left: 18
        },
        iconPass: {
            position: 'absolute',
            top: 20,
            right: 20
            // left: -10
        },
        botao: {
            marginTop: 10,
            backgroundColor: "#40BFFF",
            height: 70,
            justifyContent: 'center',
            borderRadius: 5,
            elevation: 20,
            shadowColor: '#40BFFF',
            shadowOffset: { width: -10, height: 20 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
        },
        textBotao: {
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16
        }, 
    }) 
}
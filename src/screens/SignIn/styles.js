import { StatusBar, StyleSheet } from "react-native"

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',

        },
        loading: {
            flex: 1,
            justifyContent: "center",
            backgroundColor: 'white',
        },
        containerLogin: {
            marginHorizontal: 16,
        },
        input: {
            height: 60,
            paddingLeft: 55,
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
            top: 15,
            left: 18
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
        orLine: {
            marginTop: 20,
            marginBottom: 10,
            marginHorizontal: 16,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center'
        },
        textOr: {
            marginHorizontal: 10,
            fontWeight: 'bold',
            color: "#9098B1"
        },
        line: {
            width: '41%',
            height: 2,
            backgroundColor: '#EBF0FF'
        },
        botaoLogarRedes: {
            marginTop: 10,
            height: 70,
            justifyContent: 'center',
            borderColor: '#EBF0FF',
            borderRadius: 5,
            borderWidth: 2
        },
        logoBotao: {
            position: 'absolute',
            width: 40,
            height: 40,
            // top: 15,
            left: 16
        },
        textBotaoRedes: {
            textAlign: 'center',
            justifyContent: 'center',
            color: '#9098B1',
            fontWeight: 'bold',
            fontSize: 16
        }
    })
}
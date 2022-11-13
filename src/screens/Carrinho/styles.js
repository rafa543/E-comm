import { StatusBar, StyleSheet } from "react-native"

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
        },
        loading: {
            flex: 1,
            justifyContent: "center",
            backgroundColor: 'white',
        },
        header: {
            marginVertical: 20,
            marginHorizontal: 16
        },
        text: {
            fontWeight: 'bold',
            color: '#223263',
            fontSize: 18
        },
        cupom: {
            marginHorizontal: 16,
            flexDirection: 'row',
            height: 60,
            marginBottom: 20
        },
        input: {
            width: '75%',
            borderWidth: 1,
            borderColor: '#EBF0FF',
            paddingLeft: 20,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            color: '#9098B1',
        },
        apply: {
            backgroundColor: '#40BFFF',
            borderTopRightRadius: 8,
            borderBottomEndRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            width: '25%'
        },
        textBtn: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16
        },
        containerPreco: {
            marginHorizontal: 16,
            borderWidth: 1,
            borderColor: '#EBF0FF',
            paddingVertical: 10,
            borderRadius: 5,
            marginBottom: 100
        },
        linhaPreco: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 8
        },
        linha: {
            color: "#EBF0FF"
        },
        text2: {
            color: '#9098B1',
            fontSize: 16
        },
        total: {
            color: "#223263",
            fontWeight: 'bold',
            fontSize: 18
        },
        totalFinal: {
            color: "#40BFFF",
            fontWeight: 'bold',
            fontSize: 18
        }
    })
} 
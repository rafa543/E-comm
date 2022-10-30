import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Botao() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Add To Cart</Text>
        </TouchableOpacity>
    )
}

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "92%",
        position: 'absolute',
        bottom: 15,
        marginLeft: 16,
        height: 70,
        backgroundColor: '#40BFFF',
        borderRadius: 5,
        shadowColor: '#40BFFF',
        shadowOffset: {width: -10, height: 20},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
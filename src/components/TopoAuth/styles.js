import { StyleSheet } from "react-native"

export const styles = () => {
    return StyleSheet.create({
        logo: {
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40
        },
        image: {
            width: 72,
            height: 72,
            borderRadius: 16,
            marginBottom: 16
        },
        textWelcome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#223263',
            marginBottom: 8
        },
        subtitle: {
            color: '#9098B1'
        },
    }) 
}
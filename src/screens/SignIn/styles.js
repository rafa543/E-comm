import { StatusBar, StyleSheet } from "react-native"

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            // paddingTop: 60,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
            
        },
        logo: {
            flex: 1,
            alignContent: 'center', 
            alignItems: 'center',
            justifyContent: 'center'
        }, 
        image: {
            width: 72,
            height: 72,
            borderRadius: 16,
            marginBottom: 8
        }, 
        textWelcome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#223263',
            marginBottom: 8
        }, 
        subtitle: {
            color: '#9098B1'
        }
    })
}
import { StyleSheet, StatusBar } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
        },
        header: {
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 16,
            marginBottom: 28,
        },
        nomeProduto: {
            marginLeft: 20,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#223263',
        }
    })
}
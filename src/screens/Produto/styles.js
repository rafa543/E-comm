import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
            paddingTop: 30,
        },
        header: {
            flexDirection: 'row',
            marginHorizontal: 16,
            marginBottom: 28,
            justifyContent: 'space-between'
        },
        setaNome: {
            flexDirection: 'row'
        },
        nomeProduto: {
            marginLeft: 20,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#223263',
        },
        busca: {
            marginRight: 20
        },
        carousel: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textSize: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#223263',
            marginBottom: 16
        },
        buttonSize: {
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: 56,
            height: 56,
            borderColor: '#EBF0FF',
            borderWidth: 2,
            borderRadius: 28,
            marginRight: 20,
        },
        sizes: {
            fontWeight: 'bold',
            color: '#223263',
            fontSize: 16,
        },
        buttonColor: {
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: 56,
            height: 56,
            borderRadius: 28,
            marginRight: 20,
        },
        selecionado: {
            width: 18,
            height: 18,
            backgroundColor: 'white',
            borderRadius: 9
        }
    })
}
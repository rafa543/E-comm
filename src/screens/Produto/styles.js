import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
            paddingTop: 30
        },
        header: {
            flexDirection: 'row',
            marginHorizontal: 16,
            justifyContent:'space-between'
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
        }
    })
}
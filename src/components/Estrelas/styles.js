import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

export const styles = () => {
    return StyleSheet.create({
        containerInfo: {
            marginHorizontal: 18,
            marginTop: 20
        },
        infoTituloEfavorites: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10
        },
        infoTitle: {
            width: width * 0.7,
            fontSize: 20,
            color: '#223263',
            fontWeight: 'bold',
        },
        imgProduct: {
            width: 25,
            height: 25
        }, 
        precoEEstrelas: {
        }, 
        estrelas: {
            flexDirection: 'row', 
            marginBottom: 16
        },
        preco: {
            fontSize: 25,
            marginBottom: 20,
            fontWeight: 'bold',
            color: '#40bfff'
        }
    })
}
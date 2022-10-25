import { StyleSheet, StatusBar } from 'react-native';
import React from 'react';

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            // paddingTop: 60,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
        },
        header: {
            marginHorizontal: 18,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },  
        input: {
            width: 263,
            height: 46,
            borderWidth: 1,
            borderColor: "#d9d9d9",
            borderRadius: 5,
            paddingLeft: 45
        },
        iconSerch: {
            width: 18,
            height: 18,
            position: 'absolute',
            top: 15,
            left: 15
        },
        favorite: {
            width: 25,
            height: 25
        },
        notification: {
            width: 25,
            height: 25
        },
        scrolls: {
            marginBottom: 20
        },
        containerText: {
            marginTop: 10,
            marginHorizontal: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textCategory: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#223263',
        },
        textCategoryMais: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#40bfff'
        },
    })
}
import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
            marginBottom: 70
            // marginTop:
            // paddingTop: 30,
        },
        header: {
            flexDirection: 'row',
            marginTop: 20,
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
        },
        textspecification: {
            fontSize: 16,
            color: "#223263"
        },
        areaShow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        showText: {
            textAlign: 'right',
            color: '#9098B1'
        },
        description: {
            fontSize: 18,
            lineHeight: 32,
            color: '#9098B1'
        },
        titleStyle: {
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10,
        },
        textStyle: {
            fontSize: 16,
            textAlign: 'center',
            padding: 10,
        },
        touchableOpacityStyle: {
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            right: 30,
            bottom: 30,
        },
        floatingButtonStyle: {
            resizeMode: 'contain',
            width: 70,
            height: 70,
        },
        mainviewStyle: {
            // flex: 1,
            // paddingTop: 100,
            flexDirection: 'column',
            // marginBottom: 20
          },
          footer: {
            position: 'absolute',
            flex:0.1,
            left: 0,
            right: 0,
            bottom: -10,
            backgroundColor:'#40BFFF',
            flexDirection:'row',
            height:80,
            alignItems:'center',
            borderRadius: 5,
            marginHorizontal: 16,
          },
          bottomButtons: {
            alignItems:'center',
            justifyContent: 'center',
            flex:1,
          },
          footerText: {
            color:'white',
            fontWeight:'bold',
            alignItems:'center',
            fontSize:18,
          },
    })
}
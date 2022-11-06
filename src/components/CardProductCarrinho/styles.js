import { StatusBar, StyleSheet } from "react-native"

export const styles = () => {
    return StyleSheet.create({
        container: {
            marginHorizontal: 16,
            borderWidth: 2,
            borderColor: '#EBF0FF',
            borderRadius: 10,
            // height: '20%',
            height: 140,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 20
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 5,
            marginRight: 16
        },
        topoCard: {
            flexDirection: 'row',
            marginBottom: 10
        },
        title: {
            fontWeight: 'bold',
            color: '#223263',
            fontSize: 15,
            width: '60%',
            marginBottom: 20
        },
        containerPrice: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        preco: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#40bfff',
            marginRight: 15
        },
        buttonNumber: {
            borderColor: '#EBF0FF',
            borderWidth: 1,
            borderRadius: 10, 
            flexDirection: 'row',
            marginLeft: 10
        },
        menos: {
            paddingVertical: 5,
            paddingHorizontal: 10
        }, 
        number: {
            fontSize: 18,
            paddingHorizontal: 10,
            color: '#8791B1',
            backgroundColor: '#EBF0FF'
        }, 
        mais: {
            paddingVertical: 5,
            paddingHorizontal: 10
        }
    })
} 
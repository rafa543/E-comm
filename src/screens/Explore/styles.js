import { StyleSheet, StatusBar } from 'react-native';

// Change to the number of columns in your grid
const numCols = 4;

// Change to the spacing for each item
const spacing = '1.25rem';


export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
        },
        textCategory: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#223263',
            marginHorizontal: 16,
            marginBottom: 16
        },
        manFashion: {
            marginHorizontal: 16,
            flexDirection: 'row',
            flexWrap: "wrap",
            marginRight: -12,
            marginBottom: 16,
        },
        containerBotao: {
            marginRight: 12,
            alignItems: 'center',
            flexBasis: '20%',
            marginBottom: 16
        },
        botao: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            width: 70,
            height: 70,
            borderRadius: 66,
            borderColor: '#EBF0FF',
            borderWidth: 1,
            backgroundColor: 'trasnparent',
        },
        image: {
            width: 26,
            height: 26
        },
        containerBusca: {
            marginHorizontal: 16
        },
        itemBusca: {
            height: 50,
            fontSize: 16,
            color: "#9098B1"
        },  
        text: {
            color: '#9098b1',
        },
        header: {
            marginHorizontal: 18,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20
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
    })
}
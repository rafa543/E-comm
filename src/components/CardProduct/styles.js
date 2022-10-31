import { StyleSheet } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
        container: {
            marginHorizontal: 18
        },
        item: {
            flex: 1,
            paddingHorizontal: 10,
            borderRadius: 15,
            paddingTop: 16,
            // margin: 10,
            marginRight: 16,
            marginTop: 20,
            borderColor: '#EBF0FF',
            borderWidth: 2,
            paddingBottom: 10,
        },
        image: {
            width: '100%',
            height: 120,
            borderRadius: 5
        },
        title: {
            width: 120,
            fontSize: 15,
            color: '#223263',
            fontWeight: 'bold',
            marginHorizontal: 5,
            marginBottom: 8,
            height: 40
        },
        price: {
            fontSize: 18,
            marginBottom: 8,
            fontWeight: 'bold',
            color: '#40bfff',
        },
        discount: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        oldPrice: {
            textDecorationLine: 'line-through',
            color: '#9098B1',
        },
        descont: {
            color: '#fb7181',
            fontWeight: 'bold',
        }
    })
}
import { StyleSheet } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
        container: {
            minHeight: 120,
            maxHeight: 120,
            marginHorizontal: 18,
            marginVertical: 20,
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
        containerBotao: {
            alignItems: 'center',
            marginRight: 16,
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
        text: {
            color: '#9098b1',
        }
    })
}
import { StyleSheet, StatusBar } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
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
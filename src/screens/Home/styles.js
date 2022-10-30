import { StyleSheet, StatusBar } from 'react-native';

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
        containerBanner: {
                marginHorizontal: 16,
                marginTop: 10,
                marginBottom: 20
        },
        banner: {
            width: '100%',
            height: 206,
        },
        bannerContent: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 24,
        },
        title: {
            fontSize: 28,
            color:  'white',
            fontWeight: 'bold',
            marginBottom: 16
        },
        subtitle: {
            fontSize: 13,
            color:  'white',
            lineHeight: 21
        },
    })
}
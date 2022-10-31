import { StyleSheet, StatusBar } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            // paddingTop: 60,
            marginTop: StatusBar.currentHeight || 0,
            backgroundColor: 'white',
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
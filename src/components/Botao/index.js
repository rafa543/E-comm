import { ScrollView, StyleSheet, Text, View } from "react-native";

export function ContainerView() {
    return (
        <ScrollView style={styles.scrollViewStyle}>
            <View>
                <Text style={styles.textStyle}> Example for ScrollView and Fixed Footer</Text>
            </View>
        </ScrollView>
    )
}

var styles = StyleSheet.create({
    mainviewStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor: 'green',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
    },
    bottomButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    footerText: {
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 18,
    },
    textStyle: {
        alignSelf: 'center',
        color: 'orange'
    },
    scrollViewStyle: {
        borderWidth: 2,
        borderColor: 'blue'
    }
});
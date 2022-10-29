import { StyleSheet } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
        image: {
            width: 400,
            height: 300
        },
        dotsContainer: {
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 6
        }
    })
}
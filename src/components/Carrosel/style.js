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
            marginTop: 10,
        },
        dot: {
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 1
        }
    })
}
import { Text, View } from "react-native";
import { styles } from "./styles";

const style = styles()

export function MessageError({message}) {
    console.log(message)
    return (
        <View style={style.container}>
            <Text style={style.text}>* {message}</Text>
        </View>
    )
}
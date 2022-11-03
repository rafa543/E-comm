import { Image, Text, View } from "react-native";
import { styles } from "./styles";
const style = styles()

export function TopoAuth(props) {
    return (
        <View style={style.logo}>
            <Image style={style.image} source={require("../../../assets/adaptive-icon3.png")} />
            <Text style={style.textWelcome}>{props.title}</Text>
            <Text style={style.subtitle}>{props.subtitle}</Text>
        </View>
    )
}
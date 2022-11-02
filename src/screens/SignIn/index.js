import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
const style = styles()

export function SignIn () {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white" />
            <View style={style.logo}>
                <Image style={style.image} source={require("./../../../assets/adaptive-icon3.png")}/>
                <Text style={style.textWelcome}>Welcome to E-com</Text>
                <Text style={style.subtitle}>Sign in to continue</Text>
            </View>
        </View>
    )
}
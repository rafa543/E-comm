import { StatusBar } from "expo-status-bar"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { Separator } from "../../components/Separator";
import { useNavigation } from "@react-navigation/core";
import { ListProduct } from "../../components/ListProduct";
const style = styles()

export function Favoritos() {
    const navigation = useNavigation()

    return (
        <ScrollView style={style.container}>
            <StatusBar backgroundColor="white" />
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="#9098B1" />
                </TouchableOpacity>
                <Text style={style.nomeProduto}>Produtos Favoritos</Text>
            </View>
            <Separator />
            <View>
                <ListProduct horizontalOrVertical={"favorites"} />
            </View>
        </ScrollView>
    )
}
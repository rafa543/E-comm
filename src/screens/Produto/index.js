import { View, Text, ScrollView } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/core'
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";



const style = styles()


export function Produto() {
    const route = useRoute()
    const produto = route.params.data
    const navigation = useNavigation()

    function setarNome() {
        if (produto.title.length >= 25) {
            return produto.title.slice(0, 25) + "..."
        }
        return produto.title
    }

    function voltar() {
        navigation.navigate("Home")
    }

    return (
        <ScrollView style={style.container}>
            <View style={style.header}>
                <View style={style.setaNome}>
                    <TouchableOpacity onPress={voltar}>
                        <AntDesign name="left" size={24} color="#9098B1" />
                    </TouchableOpacity>
                    <Text style={style.nomeProduto}>{setarNome()}</Text>
                </View>
                <View style={style.setaNome}>
                    <TouchableOpacity style={style.busca}>
                        <Ionicons name="search" size={24} color="#9098B1" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="#9098B1" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/core'
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import CarouselCards from "../../components/Carrosel/CarouselCards";
import { Carosel } from "../../components/Carrosel/CArrosusel2";
import { CarroselY } from "../../components/Carrosel/CarroselYoutube";
import { ClassificacaoStars } from "../../components/Estrelas";
import { useState } from "react";

const style = styles()


export function Produto() {
    const route = useRoute()
    const produto = route.params.data
    const navigation = useNavigation()
    const [botaoSelected, selectBotaoSelected] = useState('')
    const [botaoSizeSelected, selectBotaoSizeSelected] = useState('')

    function setarNome() {
        if (produto.title.length >= 25) {
            return produto.title.slice(0, 25) + "..."
        }
        return produto.title
    }

    function voltar() {
        navigation.navigate("Home")
    }

    function handleSelected(item){
        console.log(item)
        selectBotaoSelected(item)
    }

    function handleSizeSelected(item){
        selectBotaoSizeSelected(item)
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
            {/* CAROUSEL */}
            {/* <View style={style.carousel}>
                <CarouselCards imagem={produto.imagens}/>
            </View> */}
            <Carosel produto={produto.imagens} />
            {/* <CarroselY imagens={produto.imagens}/> */}

            <ClassificacaoStars produto={produto} />

            <View style={{marginHorizontal: 16, marginBottom: 20}}>
                <Text style={style.textSize}>Select Size</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        produto.sizes.map((item, index) => (
                            <TouchableOpacity 
                                style={[style.buttonSize, {borderColor: botaoSizeSelected === item ?"#40BFFF" : "#EBF0FF"}]}
                                onPress={() => handleSizeSelected(item)}
                            >
                                <Text style={style.sizes}>{item}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>

            <View style={{marginHorizontal: 16, marginBottom: 20}}>
                <Text style={style.textSize}>Select Cor</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        produto.colors.map((item, index) => (
                            <TouchableOpacity 
                                style={[
                                    style.buttonColor, 
                                    {backgroundColor: `${item}`}]} 
                                onPress={() => handleSelected(item)}
                            >
                                {
                                    botaoSelected === item ? <View style={style.selecionado}></View> 
                                     : 
                                    <View></View>
                                }
                            </TouchableOpacity>
                            
                        ))
                    }
                </ScrollView>
            </View>

        </ScrollView>
    )
}
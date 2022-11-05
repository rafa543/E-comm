import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Botao } from "../../components/Botao";
import { Carosel } from "../../components/Carrosel/CArrosusel2";
import { ClassificacaoStars } from "../../components/Estrelas";
import api from '../../services/api';
import { styles } from "./styles";

const style = styles()

export function Produto() {
    const route = useRoute()
    const id = route.params
    const navigation = useNavigation()
    const [produto, setProduto] = useState([{}])
    const [botaoSelected, selectBotaoSelected] = useState('')
    const [botaoSizeSelected, selectBotaoSizeSelected] = useState('')

    function setarNome() {
        // if (produto.title.length >= 25) {
        //     return produto.title.slice(0, 25) + "..."
        // }
        // return produto.title
    }

    function voltar() {
        navigation.navigate("Home")
    }

    function handleSelected(item) {
        selectBotaoSelected(item)
    }

    function handleSizeSelected(item) {
        selectBotaoSizeSelected(item)
    }

    async function loadProducts() {
        try {
            const response = await api.get(`/produtos/${id}`);
            const list = response.data;
            
            setProduto(list)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadProducts()
        
    }, [])

    return (
        <>
            <ScrollView style={style.container}>
                <View style={style.header}>
                    <View style={style.setaNome}>
                        <TouchableOpacity onPress={voltar}>
                            <AntDesign name="left" size={24} color="#9098B1" />
                        </TouchableOpacity>
                        <Text style={style.nomeProduto}>{produto.title}</Text>
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
                
                <Carosel produto={produto} />

                <ClassificacaoStars produto={produto} />
                {/* {console.log(produto.sizes)} */}
                <View style={{ marginHorizontal: 16, marginBottom: 20 }}>
                    <Text style={style.textSize}>Select Size</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            produto.sizes.split(",").map((item, index) => (
                                <TouchableOpacity
                                    style={[style.buttonSize, { borderColor: botaoSizeSelected === item ? "#40BFFF" : "#EBF0FF" }]}
                                    onPress={() => handleSizeSelected(item)}
                                >
                                    <Text style={style.sizes}>{item}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                        
                {/* <View style={{ marginHorizontal: 16, marginBottom: 20 }}>
                    <Text style={style.textSize}>Select Cor</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            produto.colors.map((item, index) => (
                                <TouchableOpacity
                                    style={[
                                        style.buttonColor,
                                        { backgroundColor: `${item}` }]}
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
                </View> */}


                {/* <View style={{ marginHorizontal: 16, marginBottom: 100 }}>
                    <Text style={style.textSize}>Specification</Text>
                    <View style={style.areaShow}>
                        <Text style={style.textspecification}>Shown:</Text>
                        <Text style={style.showText}>Laser {`\n`}Blue/Anthracite/Watermelon{`\n`}/White</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={style.textspecification}>Style:</Text>
                        <Text style={style.showText}>CD0113-400</Text>
                    </View>
                    <Text style={style.description}>The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.</Text>
                </View> */}

            </ScrollView>
            <Botao />
        </>
    )
}
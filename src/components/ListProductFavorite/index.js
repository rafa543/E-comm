import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import api from "../../services/api";
import { Feather } from '@expo/vector-icons'; 
import { styles } from "./styles"
const style = styles()

const Item = ({ data }) => (

    <TouchableOpacity style={style.item}>
        <Image style={style.image} source={{ uri: data.item.image }} />
        <Text style={style.title}>{data.item.nome}</Text>
        <Text style={style.price}>{data.item.preco}</Text>
        <View style={style.discount}>
            <Text style={style.oldPrice}>{data.item.oldPreco}</Text>
            <Text style={style.descont}>24%Off</Text>

            {
                data.item.favorito ?
                    <TouchableOpacity>
                        <Feather name="trash" size={24} color="#9098B1" />
                    </TouchableOpacity> :
                    null
            }

        </View>
    </TouchableOpacity>
);

export function ListProductFavorite() {
    const [data, setData] = useState()
    

    const renderItem = (data) => (
        <Item data={data} />
    );

    async function loadFavorites() {
        try {
            const response = await api.get('/carrinho');
            const list = response.data;

            setData(list)
        } catch (err) {
            console.error(err);
        }
    }   

    function handleProduct(data) {
        navigation.navigate('Produto', data.id)
    }

    useEffect(() => {
        loadFavorites()
    }, [])

    return (
        <FlatList
            data={data}
            style={[style.container, { marginRight: 0, }]}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}
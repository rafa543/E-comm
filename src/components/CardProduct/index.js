import { Text, TouchableOpacity, Image, View } from 'react-native'
import { styles } from "./styles"
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons'; 
const style = styles()

export function CardProduct({ data, favorites }) {
    const navigation = useNavigation()

    function handleProduct(data) {
        navigation.navigate('Produto', data.id)
    }

    return (
        <TouchableOpacity style={style.item} onPress={() => handleProduct(data)}>
            <Image style={style.image} source={{ uri: data.image }} />
            <Text style={style.title}>{data.title}</Text>
            <Text style={style.price}>{data.preco}</Text>
            <View style={style.discount}>
                <Text style={style.oldPrice}>{data.oldPreco}</Text>
                <Text style={style.descont}>24%Off</Text>
                
                {
                    favorites ? 
                    <TouchableOpacity>
                        <Feather name="trash" size={24} color="#9098B1" />
                    </TouchableOpacity> :
                    null
                }

            </View>
        </TouchableOpacity>
    )
}
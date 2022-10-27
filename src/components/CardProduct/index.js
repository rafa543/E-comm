import { Text, TouchableOpacity, Image, View } from 'react-native'
import { styles } from "./styles"
import { useNavigation } from '@react-navigation/core';
const style = styles()

export function CardProduct({ data }) {
    
    const navigation = useNavigation()

    function handleProduct(data) {
        navigation.navigate('Produto', {data})
    }

    return (
        <TouchableOpacity style={style.item} onPress={() => handleProduct(data)}>
            <Image style={style.image} source={{ uri: data.image }} />
            <Text style={style.title}>{data.title}</Text>
            <Text style={style.price}>{data.preco}</Text>
            <View style={style.discount}>
                <Text style={style.oldPrice}>{data.oldPreco}</Text>
                <Text style={style.descont}>24%Off</Text>
            </View>
        </TouchableOpacity>
    )
}
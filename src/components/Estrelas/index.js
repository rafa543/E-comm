import { Image, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
const style = styles()

export function ClassificacaoStars({produto}) {
    return (
        <View style={style.containerInfo}>
            <View style={style.infoTituloEfavorites}>
                <Text style={style.infoTitle}>{produto.title}</Text>
                <Image style={style.imgProduct} source={require('../../assets/Vector.png')} />
            </View>
            <View style={style.precoEEstrelas}>
                <View style={style.estrelas}>
                    <FontAwesome style={{ marginRight: 5 }} name="star" size={18} color="#FFC833" />
                    <FontAwesome style={{ marginRight: 5 }} name="star" size={18} color="#FFC833" />
                    <FontAwesome style={{ marginRight: 5 }} name="star" size={18} color="#FFC833" />
                    <FontAwesome style={{ marginRight: 5 }} name="star" size={18} color="#FFC833" />
                    {/* <FontAwesome style={{marginRight: 5}} name="star-half-empty" size={18} color="#FFC833" /> */}
                    <FontAwesome style={{ marginRight: 5 }} name="star" size={18} color="#EBF0FF" />
                    {/* <FontAwesome style={{marginRight: 5}} name="star-o" size={18} color="#EBF0FF" /> */}
                </View>
                <Text style={style.preco}>{produto.preco}</Text>
            </View>
        </View>
    )
}
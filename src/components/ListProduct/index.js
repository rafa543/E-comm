import { FlatList, View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"

const style = styles()

const DATA = [
    {
        id: '1',
        title: 'FS - Nike Air Max 270 React',
        image:
            'https://github.com/rafa543/E-comm/blob/main/src/assets/produtos/tenis1.jpg?raw=true',
        preco: '$299,70',
        oldPreco: '$534,33',
    },
    {
        id: '2',
        title: 'Quilted Maxi Cros',
        image:'https://github.com/rafa543/E-comm/blob/main/src/assets/produtos/tenis2.png?raw=true',
        preco: '$299,70',
        oldPreco: '$534,33',
    },
    {
        id: '3',
        title: 'NIke Air Force 1',
        image:
            'https://static.zattini.com.br/produtos/tenis-nike-air-max-intrlk-lite-feminino/72/2IC-6028-172/2IC-6028-172_zoom1.jpg?ts=1646398003',
        preco: '$299,70',
        oldPreco: '$534,33',
    },
    {
        id: '4',
        title: 'Chuteira Futsal Nike Beco 2 - Adulto',
        image: 'https://github.com/rafa543/E-comm/blob/main/src/assets/produtos/bolsa.png?raw=true',
        preco: '$299,70',
        oldPreco: '$534,33',
    },
    {
        id: '5',
        title: 'Tênis Nike Downshifter 11',
        image:
            'https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/25/98/2598258_tenis-nike-revolution-6-esportivo-feminino-tecido-branco-5172073_s1_637824327286110514.jpg',
        preco: '$299,70',
        oldPreco: '$534,33',
    },
    {
        id: '6',
        title: 'Tênis Nike ZoomX Invincible Run Flyknit 2',
        image: 'https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/25/85/2585197_tenis-moleca-flatform-detalhe-trama-branco-5170963_s4_637825251979298126.jpg',
        preco: '$299,70',
        oldPreco: '$534,33',
    },
];

const Item = ({ data }) => (
    <TouchableOpacity style={style.item}>
        <Image style={style.image} source={{uri:data.image}}/>
        {/* <Image style={style.image} source={require('../../assets/produtos/tenis1.jpg')}/> */}
        <Text style={style.title}>{data.title}</Text>
        <Text style={style.price}>{data.preco}</Text>
        <View style={style.discount}>
            <Text style={style.oldPrice}>{data.oldPreco}</Text>
            <Text style={style.descont}>24%Off</Text>
        </View>
    </TouchableOpacity>
);

export function ListProduct() {
    const renderItem = ({ item }) => <Item data={item} />;


    return (
        <FlatList data={DATA.reverse()} style={style.container} showsHorizontalScrollIndicator={false} horizontal renderItem={renderItem} keyExtractor={item => item.id} />
    )
}
import { AntDesign, Feather } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";



const style = styles()

export function CardProductCarrinho({ produtos }) {
    
    return (
        <>
            {
                produtos?.map((i) => (
                    <View style={style.container}>
                        <View>
                            {/* <Image style={style.image} source={require('../../assets/produtos/tenis1.jpg')} /> */}
                            <Image style={style.image} source={{uri: i.image}} />
                        </View>
                        <View>
                            <View style={style.topoCard}>
                                <Text style={style.title}>{i.nome}</Text>
                                <AntDesign name="heart" size={24} color="#FB7181" />
                                <Feather style={{ marginLeft: 10 }} name="trash" size={24} color="#9098B1" />
                            </View>
                            <View style={style.containerPrice}>
                                <Text style={style.preco}>{i.preco}</Text>
                                <View style={style.buttonNumber}>
                                    <TouchableOpacity>
                                        <Text style={style.menos}>
                                            <AntDesign name="minus" size={16} color="#9098B1" />
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={style.number}> 1 </Text>
                                    <TouchableOpacity>
                                        <Text style={style.mais}>
                                            <AntDesign name="plus" size={16} color="#9098B1" />
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))

            }
        </>
    )
}
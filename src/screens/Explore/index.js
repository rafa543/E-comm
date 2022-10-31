import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SearchDefault } from "../../components/SearchDefault";
import { Separator } from "../../components/Separator";
import { styles } from "./styles";
const style = styles()

export function Explore() {

    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white" />
            <SearchDefault />
            <Separator />

            <Text style={style.textCategory}>Man Fashion</Text>

            <View style={style.manFashion}>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manShirt.png')} />
                    </View>
                    <Text style={style.text}>Man Shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/dress.png')} />
                    </View>
                    <Text style={style.text}>Dress</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manBag.png')} />
                    </View>
                    <Text style={style.text}>Man Work</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/womanBag.png')} />
                    </View>
                    <Text style={style.text}>Woman Bag</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manShoes.png')} />
                    </View>
                    <Text style={style.text}>Man Shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/womanShoes.png')} />
                    </View>
                    <Text style={style.text}>High Heels</Text>
                </TouchableOpacity>
            </View>

            <Text style={style.textCategory}>Woman Fashion</Text>

            <View style={style.manFashion}>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manShirt.png')} />
                    </View>
                    <Text style={style.text}>Dress</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/dress.png')} />
                    </View>
                    <Text style={style.text}>Woman T-Shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manBag.png')} />
                    </View>
                    <Text style={style.text}>Woman Pants</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/womanBag.png')} />
                    </View>
                    <Text style={style.text}>Shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manShoes.png')} />
                    </View>
                    <Text style={style.text}>Woman Bag</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/manShoes.png')} />
                    </View>
                    <Text style={style.text}>High Heels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.containerBotao}>
                    <View style={style.botao}>
                        <Image style={style.image} source={require('../../assets/categories/womanShoes.png')} />
                    </View>
                    <Text style={style.text}>Bikini</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
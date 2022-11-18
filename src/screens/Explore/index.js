import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SearchDefault } from "../../components/SearchDefault";
import { Separator } from "../../components/Separator";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import api from "../../services/api";
const style = styles()

export function Explore() {
    const [inputSerch, setInputSerch] = useState(false)
    const [produtos, setprodutos] = useState()
    const navigation = useNavigation()

    function deslogar() {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Deslogado")
            navigation.navigate("SignIn")
        }).catch((error) => {
            // An error happened.
        });
    }

    async function loadProducts(nome) {
        try {
            const response = await api.get(`/produtos/nome/${nome}`);
            const list = response.data;
            setprodutos(list)
            setInputSerch(true)
        } catch (err) {
            console.error(err);
        }
    };

    function teste(nome) {
        // console.log(nome)
        loadProducts(nome)
        

    }



    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white" />
            {/* <SearchDefault /> */}

            <View style={style.header}>
                <View>
                    <TextInput
                        style={style.input}
                        placeholder="Search Product"
                        onChangeText={(i) => teste(i)}
                        // onFocus={() => setInputSerch(true)}
                        // onBlur={() => setInputSerch(false)}
                    />
                    <Image style={style.iconSerch} source={require('../../assets/Group.png')} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Favoritos")}>
                    <Image style={style.favorite} source={require('../../assets/Vector.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={deslogar}>
                    <Image style={style.notification} source={require('../../assets/notifications.png')} />
                </TouchableOpacity>
            </View>

            <Separator />

            {
                inputSerch ?
                    <View style={style.containerBusca}>
                        {
                            produtos.map((i) => (
                                <TouchableOpacity>
                                    <Text style={style.itemBusca}>{i}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    :
                    <>

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
                    </>
            }

        </View>
    )
}
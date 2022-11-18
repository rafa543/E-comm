import { useState } from "react";
import { useEffect } from "react";
import { AntDesign, Feather } from '@expo/vector-icons';
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Botao } from "../../components/Botao";
import { Separator } from "../../components/Separator";
import api from "../../services/api";
import { styles } from "./styles";
import {formatNumber} from "../../utils/fomatarDinheiro";

const style = styles()

export function Carrinho() {
    const [list, setList] = useState()
    const [precos, setPrecos] = useState(0)
    const [loading, setLoading] = useState(false)

    async function getCarrinho() {
        try {
            const response = await api.get(`/carrinho`);
            const list = response.data;
            setPrecos(list.reduce(function(soma, numero){
                // console.log(soma)
                return soma + numero.preco
            }, 0))
            setList(list)
            setLoading(false)
        } catch (err) {
            console.error(err);
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        getCarrinho()
    }, [])

    return (
        <>
            {
                loading || !list ?
                    <View style={style.loading}>
                        <ActivityIndicator size={100} color="#40bfff" />
                    </View> :
                    <>
                        <ScrollView style={style.container}>
                            <View style={style.header}>
                                <Text style={style.text}>Your Cart</Text>
                            </View>
                            <Separator />

                            {/* <CardProductCarrinho produtos={list} /> */}
                            {
                                list?.map((i) => (
                                    <View style={style.containerProdutos}>
                                        <View>
                                            <Image style={style.image} source={{ uri: i.image }} />
                                        </View>
                                        <View>
                                            <View style={style.topoCard}>
                                                <Text style={style.title}>{i.nome}</Text>
                                                {console.log(i)}
                                                {
                                                    i.favorito ? <AntDesign name="heart" size={24} color="#FB7181" />:
                                                    <AntDesign name="hearto" size={24} color="#FB7181" />
                                                }
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
                                                    <Text style={style.number}> {i.quant} </Text>
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

                            <View style={style.cupom}>
                                <TextInput style={style.input} placeholder="Enter Cupon Code" />
                                <TouchableOpacity style={style.apply}>
                                    <Text style={style.textBtn}>Apply</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={style.containerPreco}>
                                <View style={style.linhaPreco}>
                                    <Text style={style.text2}>Items ({list.length})</Text>
                                    <Text>R$ {formatNumber(precos)}</Text>
                                </View>
                                <View style={style.linhaPreco}>
                                    <Text style={style.text2}>Shipping</Text>
                                    <Text>$40.00</Text>
                                </View>
                                <View style={style.linhaPreco}>
                                    <Text style={style.text2}>Import charges</Text>
                                    <Text>$128.00</Text>
                                </View>
                                <View style={style.linhaPreco}>
                                    <Text style={style.linha}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
                                </View>
                                <View style={style.linhaPreco}>
                                    <Text style={style.total}>Total Price</Text>
                                    <Text style={style.totalFinal}>R$ {formatNumber(precos)}</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <Botao />
                    </>
            }
        </>
    )
}
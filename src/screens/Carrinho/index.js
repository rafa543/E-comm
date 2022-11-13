import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Botao } from "../../components/Botao";
import { CardProductCarrinho } from "../../components/CardProductCarrinho";
import { Separator } from "../../components/Separator";
import api from "../../services/api";
import { styles } from "./styles";

const style = styles()

export function Carrinho() {
    const [list, setList] = useState()
    const [loading, setLoading] = useState(false)

    async function getCarrinho() {
        try {
            const response = await api.get(`/carrinho`);
            const list = response.data;

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
                loading ?
                    <View style={style.loading}>
                        <ActivityIndicator size={100} color="#40bfff" />
                    </View> :
                    <>
                        <ScrollView style={style.container}>
                            <View style={style.header}>
                                <Text style={style.text}>Your Cart</Text>
                            </View>
                            <Separator />

                            <CardProductCarrinho produtos={list} />
                            {/* <CardProductCarrinho /> */}

                            <View style={style.cupom}>
                                <TextInput style={style.input} placeholder="Enter Cupon Code" />
                                <TouchableOpacity style={style.apply}>
                                    <Text style={style.textBtn}>Apply</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={style.containerPreco}>
                                <View style={style.linhaPreco}>
                                    <Text style={style.text2}>Items (3)</Text>
                                    <Text>$598.86</Text>
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
                                    <Text style={style.totalFinal}>$766.86</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <Botao />
                    </>
            }
        </>
    )
}
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, FlatList, LogBox, ScrollView } from "react-native";
import { styles } from "./styles";
import { StatusBar } from 'expo-status-bar';
import { Category } from "../../components/Category";
import { ListProduct } from "../../components/ListProduct";
import { Carosel } from "../../components/Carrosel/CArrosusel2";
import { DATA } from "../../utils/data";
import { Separator } from "../../components/Separator";
import { SearchDefault } from "../../components/SearchDefault";
// import Fire from "../../config/firebase";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import api from "../../services/api";

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(Fire);

export function Home() {
    const style = styles()
    const [data, setData] = useState([])
    const [email, setEmail] = useState('rafa123839@gmail.xom')
    const [senha, setSenha] = useState('123456')

    const navigation = useNavigation()
    // api.get("produtos").then((response) => {
    //     console.log(response);
    // });

    async function loadProducts() {
        try {
            const response = await api.get('/produtos');
            // response.data.map((item) => {
            //     console.log("id: " + item.id)
            //     console.log("imagem: " + item.image)
            //     console.log("preco: " + item.preco)
            // })
            const data = response.data;
        } catch(err) {
            // adicionar tratamento da exceção
            console.error(err);
        }
    };

    useEffect(() => {
        console.log(getAuth().currentUser?.email)
        // loadProducts()
        // LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])


    return (
        <ScrollView style={style.container}>
            <StatusBar backgroundColor="white" />
            {console.log(data)}
            <SearchDefault />
            <Separator />

            {/* <Carosel produto={DATA[0].imagens} /> */}
            <Category />
            
            <View style={style.scrolls}>
                <View style={style.containerText}>
                    <Text style={style.textCategory}>Flash Sales</Text>
                    <TouchableOpacity><Text style={style.textCategoryMais}>See More</Text></TouchableOpacity>
                </View>

                <View>
                    <ListProduct horizontalOrVertical={"horizontal"} />
                </View>
            </View>

            <View style={style.scrolls}>
                <View style={style.containerText}>
                    <Text style={style.textCategory}>Flash Sale</Text>
                    <TouchableOpacity><Text style={style.textCategoryMais}>See More</Text></TouchableOpacity>
                </View>

                <View>
                    <ListProduct horizontalOrVertical={"horizontal"} />
                </View>

            </View>

            {/* CARTAO QUE SERA UM COMPONENTE */}
            <View style={style.containerBanner}>
                <ImageBackground style={style.banner} borderRadius={5} source={require('../../assets/image51.png')}>
                    <View style={style.bannerContent}>
                        <Text style={style.title}>Recomended {'\n'}Product</Text>
                        <Text style={style.subtitle}>We recommend the best for you</Text>
                    </View>
                </ImageBackground>
            </View>



            <View>
                <ListProduct horizontalOrVertical={"vertical"} />
            </View>
        </ScrollView>
    )
}   


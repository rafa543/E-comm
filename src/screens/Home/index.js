import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, FlatList, LogBox, ScrollView } from "react-native";
import { styles } from "./styles";
import { StatusBar } from 'expo-status-bar';
import { Category } from "../../components/Category";
import { ListProduct } from "../../components/ListProduct";
import { Carosel } from "../../components/Carrosel/CArrosusel2";
import { DATA } from "../../utils/data";
import { Separator } from "../../components/Separator";
import { SearchDefault } from "../../components/SearchDefault";
import Fire from "../../config";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(Fire);

export function Home() {
    const style = styles()
    const [data, setData] = useState([])

    async function teste() {
     
        try {
            const querySnapshot = await getDocs(collection(db, "produtos"));
            querySnapshot.forEach((doc) => {
                setData([doc.data()])
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('Ola')
        teste()
        
        // LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])

    return (
        <ScrollView style={style.container}>
            <StatusBar backgroundColor="white" />
            {console.log(data)}
            <SearchDefault />
            <Separator />

            <Carosel produto={DATA[0].imagens} />

            <Category />

            <View style={style.scrolls}>
                <View style={style.containerText}>
                    <Text style={style.textCategory}>Flash Sale</Text>
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


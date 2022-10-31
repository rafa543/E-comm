import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, FlatList, LogBox, ScrollView } from "react-native";
import { styles } from "./styles";
import { StatusBar } from 'expo-status-bar';
import { Category } from "../../components/Category";
import { ListProduct } from "../../components/ListProduct";
import { Carosel } from "../../components/Carrosel/CArrosusel2";
import { DATA } from "../../utils/data";
import { Separator } from "../../components/Separator";
import { useNavigation } from "@react-navigation/core";
import { SearchDefault } from "../../components/SearchDefault";

export function Home() {
    const style = styles()

    // useEffect(() => {
    //     LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    // }, [])

    return (
        <ScrollView style={style.container}>
            <StatusBar backgroundColor="white" />

            <SearchDefault/>
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


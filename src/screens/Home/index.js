import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { styles } from "./styles";
import { StatusBar } from 'expo-status-bar';
import { Category } from "../../components/Category";
import { ListProduct } from "../../components/ListProduct";
import { ScrollView } from "react-native-gesture-handler";

export function Home() {
    const renderItem = ({ item}) => <ItemProduct data={item} teste={'teste'}/>;
    const style = styles()
    const number = '2'

    return (
        <ScrollView style={style.container}>
            <StatusBar backgroundColor="white" />
            <View style={style.header}>
                <View>
                    <TextInput
                        style={style.input}
                        placeholder="Search Product"
                    />
                    <Image style={style.iconSerch} source={require('../../assets/Group.png')} />
                </View>
                <Image style={style.favorite} source={require('../../assets/Vector.png')} />
                <Image style={style.notification} source={require('../../assets/notifications.png')} />

            </View>

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
                    <ListProduct horizontalOrVertical={"horizontal"}/>
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


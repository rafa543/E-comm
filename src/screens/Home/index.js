import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { StatusBar } from 'expo-status-bar';
import { Category } from "../../components/Category";
import { ListProduct } from "../../components/ListProduct";
import { categories } from "../../utils/categories";
import { ScrollView } from "react-native-gesture-handler";

export function Home() {
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
                    <ListProduct/>
                </View>
            </View>

            <View style={style.scrolls}> 
                <View style={style.containerText}>
                    <Text style={style.textCategory}>Flash Sale</Text>
                    <TouchableOpacity><Text style={style.textCategoryMais}>See More</Text></TouchableOpacity>
                </View>

                <View>
                    <ListProduct/>
                </View>
            </View>
            

        </ScrollView>
    )
}


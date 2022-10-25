import { View, Text, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { StatusBar } from 'expo-status-bar';
import { Category } from "../../components/Category";
import { categories } from "../../utils/categories";

export function Home() {
    const style = styles()
    const number = '2'
    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white"/>
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
            
            <View>
                <View>
                    <Text>Flash Sale</Text>
                    <Text>See More</Text>
                </View>

                <View>
                    {/* <ListProduct/> */}
                </View>
            </View>
            
        </View>
    )
}


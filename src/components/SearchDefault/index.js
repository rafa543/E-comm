import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
const style = styles();


export function SearchDefault() {
    return (
        <View style={style.header}>
            <View>
                <TextInput
                    style={style.input}
                    placeholder="Search Product"
                />
                <Image style={style.iconSerch} source={require('../../assets/Group.png')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Favoritos")}>
                <Image style={style.favorite} source={require('../../assets/Vector.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={style.notification} source={require('../../assets/notifications.png')} />
            </TouchableOpacity>
        </View>
    )
}
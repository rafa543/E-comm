import { useNavigation } from '@react-navigation/core';
import { getAuth, signOut } from 'firebase/auth';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
const style = styles();


export function SearchDefault() {
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
            <TouchableOpacity onPress={deslogar}>
                <Image style={style.notification} source={require('../../assets/notifications.png')} />
            </TouchableOpacity>
        </View>
    )
}
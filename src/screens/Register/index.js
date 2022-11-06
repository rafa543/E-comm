import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TopoAuth } from "../../components/TopoAuth";
import { styles } from "./styles";
import { useState } from "react";
import { Stack } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/core";
const style = styles()

export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [secret, setSecret] = useState(true);
    const [secretConfirmacao, setSecretConfirmacao] = useState(true);

    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white" />
            <TopoAuth title={"Let’s Get Started"} subtitle={"Create an new account"} />

            <View style={style.containerLogin}>
                <Stack>
                    <View>
                        <TextInput
                            style={style.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Full Name"
                            keyboardType="email-address"
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-outline" size={24} color="#9098B1" />
                    </View>
                    <View>
                        <TextInput
                            style={style.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Your Email"
                        />
                        <MaterialCommunityIcons style={style.icon} name="email-outline" size={24} color="#9098B1" />
                    </View>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TextInput
                            style={style.input}
                            onChangeText={setSenha}
                            value={senha}
                            placeholder="Password"
                            secureTextEntry={secret}
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-key-outline" size={24} color="#9098B1" />
                        <TouchableOpacity onPress={() => setSecret(!secret)}>
                            <MaterialCommunityIcons style={style.iconPass} name="eye-outline" size={24} color="#9098B1" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TextInput
                            style={style.input}
                            onChangeText={setSenhaConfirmacao}
                            value={senhaConfirmacao}
                            placeholder="Password Again"
                            secureTextEntry={secretConfirmacao}
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-key-outline" size={24} color="#9098B1" />
                        <TouchableOpacity onPress={() => setSecretConfirmacao(!secretConfirmacao)}>
                            <MaterialCommunityIcons style={style.iconPass} name="eye-outline" size={24} color="#9098B1" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={style.botao} onPress={() => console.log('')} disabled={isLoading ? true : false}>

                        {
                            isLoading ?
                                <ActivityIndicator size="large" color="white" /> :
                                <Text style={style.textBotao}>Sign Up</Text>
                        }
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                        <Text style={{ color: '#9098B1' }}>Don’t have a account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                            <Text style={{ color: '#40BFFF' }}> Sign In</Text>
                        </TouchableOpacity>
                    </View>

                </Stack>
            </View>


        </View>
    )
}
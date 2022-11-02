import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Stack, IconButton, ActivityIndicator, Button } from "@react-native-material/core";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";
const style = styles()

export function SignIn() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white" />
            <View style={style.logo}>
                <Image style={style.image} source={require("./../../../assets/adaptive-icon3.png")} />
                <Text style={style.textWelcome}>Bem-vindo ao E-com</Text>
                <Text style={style.subtitle}>Sign in to continue</Text>
            </View>

            <View style={style.containerLogin}>
                <Stack>
                    <View>
                        <TextInput
                            style={style.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Your Email"
                            keyboardType="email-address"
                        />
                        <MaterialCommunityIcons style={style.icon} name="email-outline" size={24} color="#9098B1" />
                    </View>
                    <View>
                        <TextInput
                            style={style.input}
                            onChangeText={setSenha}
                            value={senha}
                            placeholder="Password"
                            keyboardType="visible-password"
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-key-outline" size={24} color="#9098B1" />
                    </View>
                    <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Home')}>
                        <Text style={style.textBotao}>Sign in</Text>
                    </TouchableOpacity>
                </Stack>
            </View>

            <View style={style.orLine}>
                <View style={style.line} />
                <Text style={style.textOr}>OR</Text>
                <View style={style.line} />
            </View>

            <View style={{ marginHorizontal: 16 }}>
                <TouchableOpacity style={style.botaoLogarRedes}>
                    <Text style={style.textBotaoRedes}>Login with Google</Text>
                    <Image style={style.logoBotao} source={require('../../assets/Google.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.botaoLogarRedes}>
                    <Text style={style.textBotaoRedes}>Login with facebook</Text>
                    <Image style={style.logoBotao} source={require('../../assets/Facebook.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity>
                    <Text style={{ color: "#40BFFF", fontSize: 16, fontWeight: 'bold' }}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={{ color: '#9098B1' }}>Don’t have a account?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#40BFFF' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
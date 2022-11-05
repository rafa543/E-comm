import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ActivityIndicator, Stack } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Fire from '../../config/firebase'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { TopoAuth } from "../../components/TopoAuth";

const style = styles()

export function SignIn() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;

                navigation.replace("Home")
                console.log(uid)
            } else {
                // User is signed out
                // ...
                console.log("deu erro")
            }
        });
    }, [])

    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const handleSignIn = () => {
        setIsLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Logado com " + user.email)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        
    }

    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white" />

            <TopoAuth title={"Bem-vindo ao E-comm"} subtitle={"Sign in to continue"}/>

            <View style={style.containerLogin}>
                <Stack>
                    <View>
                        <TextInput
                            style={style.input}
                            value={email}
                            onChangeText={setEmail}
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
                            secureTextEntry={true}
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-key-outline" size={24} color="#9098B1" />
                    </View>
                    <TouchableOpacity style={style.botao} onPress={handleSignIn} disabled={isLoading ? true : false}>
                        
                        {
                            isLoading ?
                                <ActivityIndicator size="large" color="white" /> :
                            <Text style={style.textBotao}>Sign in</Text>
                        }
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
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: '#40BFFF' }}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
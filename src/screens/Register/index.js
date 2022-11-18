import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TopoAuth } from "../../components/TopoAuth";
import { styles } from "./styles";
import { useState } from "react";
import { Stack } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/core";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const style = styles()

export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('')
    const [focusName, setFocusName] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusSenha1, setFocusSenha1] = useState(false)
    const [focusSenha2, setFocusSenha2] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [secret, setSecret] = useState(true);
    const [secretConfirmacao, setSecretConfirmacao] = useState(true);

    const navigation = useNavigation()

    const handleSignUp = () => {
        setIsLoading(true)
        if (senha  === senhaConfirmacao) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user.email)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    if(errorCode === "auth/invalid-email"){
                        Alert.alert("Email invalido!")
                    }
                    if(errorCode === "auth/email-already-in-use"){
                        Alert.alert("Email já esta em uso!")
                    }
                    if(errorCode === "auth/weak-password"){
                        Alert.alert("Senha fraca! E deve haver no minimo 6 caracteres")
                    }
                    setIsLoading(false)
                })
        
        }else{
            setIsLoading(false)
            Alert.alert("Erro senhas não são iquais!")
        }
    }

    return (
        <View style={style.container}>
            <StatusBar backgroundColor="white" />
            <TopoAuth title={"Let’s Get Started"} subtitle={"Create an new account"} />

            <View style={style.containerLogin}>
                <Stack>
                    <View>
                        <TextInput
                            style={[style.input, { borderColor: focusName ? "#40BFFF" : "#EBF0FF" }]}
                            value={name}
                            onChangeText={setName}
                            placeholder="Full Name"
                            // keyboardType="default"
                            onFocus={() => setFocusName(true)}
                            onBlur={() => setFocusName(false)}
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-outline" size={24} color={focusName ? "#40BFFF" : "#9098B1"} />
                    </View>
                    <View>
                        <TextInput
                            style={[style.input, { borderColor: focusEmail ? "#40BFFF" : "#EBF0FF" }]}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Your Email"
                            keyboardType="email-address"
                            onFocus={() => setFocusEmail(true)}
                            onBlur={() => setFocusEmail(false)}
                        />
                        <MaterialCommunityIcons style={style.icon} name="email-outline" size={24} color={focusEmail ? "#40BFFF" : "#9098B1"} />
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <TextInput
                            style={[style.input, { borderColor: focusSenha1 ? "#40BFFF" : "#EBF0FF" }]}
                            onChangeText={setSenha}
                            value={senha}
                            placeholder="Password"
                            secureTextEntry={secret}
                            onFocus={() => setFocusSenha1(true)}
                            onBlur={() => setFocusSenha1(false)}
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-key-outline" size={24} color={focusSenha1 ? "#40BFFF" : "#9098B1"} />
                        <TouchableOpacity onPress={() => setSecret(!secret)}>
                            <MaterialCommunityIcons style={style.iconPass} name="eye-outline" size={24} color="#9098B1" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <TextInput
                            style={[style.input, { borderColor: focusSenha2 ? "#40BFFF" : "#EBF0FF" }]}
                            onChangeText={setSenhaConfirmacao}
                            value={senhaConfirmacao}
                            placeholder="Password Again"
                            secureTextEntry={secretConfirmacao}
                            onFocus={() => setFocusSenha2(true)}
                            onBlur={() => setFocusSenha2(false)}
                        />
                        <MaterialCommunityIcons style={style.icon} name="account-key-outline" size={24} color={focusSenha2 ? "#40BFFF" : "#9098B1"} />
                        <TouchableOpacity onPress={() => setSecretConfirmacao(!secretConfirmacao)}>
                            <MaterialCommunityIcons style={style.iconPass} name="eye-outline" size={24} color="#9098B1" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[style.botao,
                        { opacity: email === '' || senha === '' || name === '' || senha === '' || senhaConfirmacao === '' ? 0.5 : 1 }]}
                        disabled={email === '' || senha === '' || name == '' || senha == '' || senhaConfirmacao === '' || isLoading}
                        onPress={handleSignUp}
                    >

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
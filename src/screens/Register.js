import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import { TouchableOpacity } from 'react-native'

const Register = ( navigation ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    console.log(navigation.navigate())

    const handleRegister = () => {


        console.log("userName: ", email);
        console.log("passsword: ", password);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Registro:
            </Text>


            <TextInput
                placeholder='Email'
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.textInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                placeholder="Repetir Contraseña"
                secureTextEntry
                style={styles.textInput}
                value={repeatPassword}
                onChangeText={(text) => setRepeatPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
                <Text >Registrarse</Text>
            </TouchableOpacity>

            <View style={styles.finalContainer}>
                <Text style={styles.finalText}>Ya tenes cuenta?</Text>

                <Pressable onPress={() => navigation.navigate()}>
                    <Text style={styles.loginText}>Inicia Sesion aca!</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        height: '100%',
        borderColor: 'red',
        borderWidth: 5,

    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        marginVertical: 10,
        borderBottomWidth: 2,
        borderColor: Colors.Heavyblue,
        fontFamily: 'myFont',

    },
    textInput: {
        width: "85%",
        height: 50,
        borderColor: Colors.Heavyblue,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 17,
    },
    button: {
        backgroundColor: Colors.beige,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,

    },
    buttonText: {
        color: "white",
        fonstSize: 16,
    },
    finalText: {
        fontSize: 20,
        fontFamily: 'myFont',
        marginHorizontal: 5,

    },
    loginText: {
        fontSize: 20,
        fontFamily: 'myFont',
        marginHorizontal: 5,
        color: Colors.heavyBlue,
        borderBottomWidth: 2,
        borderColor:  Colors.Heavyblue,

    },
    Pressable:{
        fontSize: 22,
        fontFamily: 'myFont',
        color: 'blue',
        marginHorizontal: 5,
    },
    finalContainer: {
       
        alignContent: 'center',
        flexDirection: 'row',
        

    }


})
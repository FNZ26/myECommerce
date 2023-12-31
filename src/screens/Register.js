import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../theme/Colors';
import { TouchableOpacity } from 'react-native';



// Lo necesario para crear un usuario, en el sing up esta lo siguiente
import { firebase_auth } from '../firebase/firebase_auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    //console.log(navigation.navigate())

    const handleRegister = async () => {

        try {
            const response = await createUserWithEmailAndPassword(firebase_auth, email, password);
            props.navigation.navigate('Login');
        }
        catch (e) {
            console.log("error registro:", e);
        }

        // en caso de necesitar uqe haga alog al final
        //finally{}

        //console.log("userName: ", email);
        //console.log("passsword: ", password);
    };

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Logo</Text>
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

                <Pressable onPress={() => props.navigation.navigate('Login')}>
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
        borderColor: Colors.Heavyblue,

    },
    Pressable: {
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
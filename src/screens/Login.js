import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import { TouchableOpacity } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
// lo necesario para el login (precisa el registrarse previamente)
import { firebase_auth } from '../firebase/firebase_auth';
import { useDispatch } from 'react-redux'
import { setIdToken, setUser } from '../redux/slices/sliceAuth'

// falta terminar lo del boton de iniciar sesion que te lleve a la app
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //usar un setX desde el slice de auth
    const dispatch = useDispatch();
    const onHandleLogin = async () => {

        try {
            const response = await signInWithEmailAndPassword(firebase_auth, email, password);
            //console.log(response);
            dispatch(setUser(response.user.email));
            dispatch(setIdToken(response._tokenResponse.idToken));


            dispatch(setUser(response.user.email));
            dispatch(response._tokenResponse.idToken);

        } catch (e) {
            console.log("error login:", e);
        }
        //console.log("userName: ", email);
        //console.log("passsword: ", password);
    };

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Logo</Text>
            <Text style={styles.title}>
                Iniciar Sesion:
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

            <TouchableOpacity style={styles.button} onPress={() => onHandleLogin()}>
                <Text >Iniciar Sesion</Text>
            </TouchableOpacity>

            <View style={styles.finalContainer}>
                <Text style={styles.finalText}>No tenes cuenta?</Text>

                <Pressable onPress={() => props.navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Registrate aca!</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Login

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
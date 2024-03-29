import { Pressable, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../theme/Colors';
import * as ImagePicker from "expo-image-picker";
import { useGetImageQuery, usePutImageMutation } from '../services/ecApi';;



import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = (props) => {
    // props para props.navegation

    const [putImage, result] = usePutImageMutation();
    const { data, isLoading, error, isError, refetch } = useGetImageQuery();
    const defaultImage = 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg';
    const [location, setLocation] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            // el .all  dice a que tipo de acrhivos entra, en este caso videos y  fotos
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            // pasa el formato de la imagen a base64 para guardarla en ddbb
            base64: true
        });
        if (!result.canceled) {
            //se cambia de .uri a .base64
            // put image se trae  de query, 
            await putImage({
                image: `data:image/png;base64,${result.assets[0].base64}`
            });
            refetch();
        }
    };

    return (
        
        <SafeAreaView>
            <Header title="Mi Cuenta" navigation={props.navigation} />
            <View style={styles.container}>

                <Image source={{ uri: data ? data.image : defaultImage }} style={{ width: 200, height: 200 }} />

                <View style={styles.containerOption}>
                    <Pressable><FontAwesome5 onPress={getCoords} name="map" size={24} color="black" /></Pressable>
                    <Text>Mapa</Text>
                </View>
                <View style={styles.containerOption}>
                    <Pressable><FontAwesome5 onPress={pickImage} name="images" size={24} color="black" /></Pressable>
                    <Text>Galeria</Text></View>
                <View style={styles.containerOption}>
                    <Pressable><FontAwesome5 onPress={openCamera} name="camera" size={24} color="black" /></Pressable>
                    <Text>Camara</Text>
                </View>

                {isLoading ? <Text>Is Loading</Text> : <Text>Load Complit</Text>}

            </View>



        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: Colors.lightBeige,

        width: '100%',
        height: '100%'
    },
    containerOption: {

        flexDirection: 'row',
    }

});



/*
    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Necesitas aceptar los permisos para poder utilizar la camara");
            return;
        } else {
            const result = await ImagePicker.launchCameraAsync({
                base64: true
            });

           // console.log(result);

            if (!result.canceled) {
                //console.log("result  no fue canceled", result.assets[0].base64)
                await putImage({
                    image: `data:image/jpeg;base64,${result.assets[0].base64}`
                });

                refetch();

            }
        }
*/
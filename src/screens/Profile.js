import { Pressable, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';

import * as ImagePicker from "expo-image-picker";
import { useGetImageQuery, usePutImageMutation } from '../services/ecApi';;


const Profile = () => {

    //const [image, setImage] = useState(null);
    const [putImage, result] = usePutImageMutation();
    const { data, isLoading, error, isError, refetch } = useGetImageQuery();
    const defaultImage = 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg';

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

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Dame permisos vieja");
            return;
        } else {
            const result = await ImagePicker.launchCameraAsync();

            console.log(result);

            if (!result.canceled) {
                await putImage({
                    image: `data:image/png;base64,${result.assets[0].base64}`
                });
            }


            refetch();
        }



    };
    return (
        <SafeAreaView>

            <Header title={'Perfil'} />

            <View style={styles.container}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    <Button title="Open Camera" onPress={openCamera} />
                    <Image source={{ uri: data ? data.image : defaultImage }} style={{ width: 200, height: 200 }} />
                </View>

                {isLoading ? <Text>AAA</Text> : <Text>OOOO</Text>}


                <Pressable><FontAwesome5 name="camera" size={24} color="black" /></Pressable>
                <Pressable><FontAwesome5 name="images" size={24} color="black" /></Pressable>
                <Pressable><FontAwesome5 name="map" size={24} color="black" /></Pressable>
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
    }

});
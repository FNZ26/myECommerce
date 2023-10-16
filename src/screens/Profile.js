import { Pressable, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';

// imports de Camara y Galeria
import * as ImagePicker from "expo-image-picker";
import { useGetImageQuery, usePutImageMutation } from '../services/ecApi';;


// import location
import * as Location from "expo-location";

const Profile = ( props ) => {
    // props para props.navegation


    const [putImage, result] = usePutImageMutation();
    const { data, isLoading, error, isError, refetch } = useGetImageQuery();
    const defaultImage = 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg';

    const [location, setLocation] = useState(null);



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



    };
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



    const getCoords = async () => {

        console.log("click en el mapa")

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            // conosle log error no permisos
            alert("Necesitas aceptar los permisos para poder utilizar el mapa");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        props.navigation.navigate("map", {location});
        
    };
   




/*
    const openLocation = async () => {
        let { status } = await Location.requestForegroundPermissionAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        } else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            NavigationPreloadManager.navigate("map", { location });


        }



    }


*/

    return (
        <SafeAreaView>
            <Header title={'Perfil'} />
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
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'
import Header from '../components/Header';

const Map = (props) => {


    const location = props.route.params;
    console.log(JSON.stringify(location, null, " "))

    return (
        <View style={styles.container}>
            <Header title="Mapa" />
            <MapView
                pointerEvents={true}
                showsUserLocation={true}

           
                style={styles.map}


            />

                 {/*
                 region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }}
                
                */}
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})
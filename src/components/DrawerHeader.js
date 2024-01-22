// CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../theme/Colors';

import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { openModalSearch } from '../redux/slices/sliceSearch';
import { FontAwesome5 } from '@expo/vector-icons';


const DrawerHeader = (props) => {

  //Icon Size:
  iconSize = 22;

  const dispatch = useDispatch();


  const onHandleSearch = () => {
    props.navigation.toggleDrawer();
    dispatch(openModalSearch());
  }


  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.profileBox} onPress={()=>props.navigation.navigate('profile')}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileImageContainer}>
            <Text style={styles.profileImage}>Imagen</Text>
          </View>

          <View style={styles.profileIconContainer}>
          <FontAwesome5 name="user-cog" size={20} color="white" />
          </View>
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Juan Pablo</Text>
        </View>

      </TouchableOpacity>

      <View style={styles.drawerOptions}>

        <TouchableOpacity onPress={() => props.navigation.navigate('home')} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="home" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onHandleSearch} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="search1" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('notifications')} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="mail" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('ShoppingHistory')} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="gift" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Mis Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('saved')} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="heart" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Favoritos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate('history')} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="clockcircleo" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('category')} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="appstore1" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Categorias</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('products',{comeFrom:"drawerHeader"})} style={styles.drawerItem}>
          <View style={styles.icon} >
            <AntDesign name="eye" size={iconSize} color="black" />
          </View>
          <Text style={styles.drawerText}>Descubrir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  profileImage: {
    borderRadius: 100,
    backgroundColor: 'black',
    height: 55,
    width: 55,
  },
  profileName: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '60%',
    alignItems: 'center',
    paddingTop: 5,

  },
  profileImageContainer: {
    flexDirection: 'row',
    width: '50%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 20,


  },
  profileIconContainer: {
    flexDirection: 'row',
    width: '50%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  profileTextContainer: {
    height: '40%',
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileBox: {
    backgroundColor: Colors.heavyBlue,
    height: 90,
  },
  drawerText: {
    color: 'black',
    fontSize: 15,

  },
  profileText: {
    color: 'black',
    fontSize: 17,
    alignItems: 'center',
  },
  profileIcon: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  drawerOptions: {
    paddingVertical: 5,
  },
  drawerItem: {
    paddingHorizontal: 7,
    height: 50,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',

  },

});



import React, { useEffect, useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Modal, FlatList, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalSearch, openModalSearch, setTextSearch } from '../redux/slices/sliceSearch';

const HeaderSearch = (props) => {
  const [text, setText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  modalSearchState = useSelector((state) => state.sliceSearch.modalSearch);

  useEffect(() => {
  setIsModalVisible(modalSearchState);
  }, [modalSearchState]);

  const openModal = () => {
   dispatch(openModalSearch());
  };

  const closeModal = () => {
    dispatch(closeModalSearch());
  };

  const handleSearch = () => {
    setSearchHistory([text, ...searchHistory]);

    //dispatch(setTextSearch());
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => props.navigation.toggleDrawer()} style={styles.icon}>
        <MaterialCommunityIcons name="menu" size={28} color="white" />
      </Pressable>

      <TouchableOpacity onPress={openModal} style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Feather style={styles.searchIcon} name="search" size={20} color="black" />
          <Text style={styles.searchText}>{text || 'Buscar en Ecommerce'}</Text>
        </View>
      </TouchableOpacity>

      <Pressable onPress={() => props.navigation.navigate('shoppingCart')} style={styles.icon}>
        <Feather name="shopping-cart" size={22} color="white" />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInputContainer}>
            <Pressable onPress={closeModal} style={styles.modalIcon}>
              <AntDesign name="back" size={24} color="white" />
            </Pressable>

            <TextInput
              style={styles.modalInput}
              placeholder="Buscar en Ecommerce"
              value={text}
              onChangeText={setText}
              onSubmitEditing={handleSearch}
            />
          </View>
          <FlatList
            data={searchHistory}
            renderItem={({ item }) => (
              <View style={styles.historyItem}>
                <Text>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    backgroundColor: Colors.heavyBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: '60%',
    padding: 5,
  },
  icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  searchContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
  },
  searchInput: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.heavyBlue,
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  searchButton: {
    padding: 10,
    backgroundColor: Colors.heavyBlue,
    borderRadius: 5,
    marginBottom: 10,
    
  },
  searchText: {
    fontFamily: 'myFont',
    marginHorizontal: 5,
    alignItems: 'center',


  },
  searchIcon: {
    marginLeft: 5,
    padding: 1,
    height: '100%',
    alignItems: 'center',
    
  },
  modalContainer: {
    borderColor: 'red',
    borderWidth: 1,
  },
  modalInputContainer: {
    borderColor: 'green',
    borderWidth: 1,
    paddingHorizontal: 5,
    width: '100%',
    height: 55,
    backgroundColor: Colors.heavyBlue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalInput: {
    width: '87%',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 5,
  },
  modalIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '13%'
  },
  historyItem: {
    marginBottom: 5,
  },
  closeButton: {
    padding: 10,
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
  },
});

export default HeaderSearch;

import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from './src/theme/Colors';
//import Home from './src/screens/Home.js';
import Header from './src/components/Header.js';
import Search from './src/components/Search';
import Products from './src/screens/Products';







export default function App() {
  return (
    <View style={styles.container}>



      <StatusBar style="auto" />
    
      {/*<Home/>*/}
      {/*<Search/>*/}
      <Products category={"smartphones"} />





    </View>
  );
}

const styles = StyleSheet.create({
  container: {


   
    
    
  },
});

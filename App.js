import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Colors } from './src/theme/Colors';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';





export default function App() {
  const [fontLoaded] = useFonts({
    myFont: require("./assets/fonts/Oswald-Regular.ttf"),
    myFontBold: require("./assets/fonts/Oswald-Bold.ttf"),
    myFontMedium: require("./assets/fonts/Oswald-Medium.ttf"),
  });

  if (!fontLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}


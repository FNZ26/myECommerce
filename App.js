import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import TabNavegation from './src/navigation/TabNavegation';
import { Provider } from 'react-redux';


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
      <TabNavegation />
    </NavigationContainer>
 
  );
}


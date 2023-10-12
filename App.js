import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import TabNavegation from './src/navigation/TabNavegation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AuthNavigation from './src/navigation/AuthNavigation';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  const [fontLoaded] = useFonts({
    myFont: require("./assets/fonts/Oswald-Regular.ttf"),
    myFontBold: require("./assets/fonts/Oswald-Bold.ttf"),
    myFontMedium: require("./assets/fonts/Oswald-Medium.ttf"),
  });

  if (!fontLoaded) {
    return;
  }


  // 
  return (

    <Provider store={store}>
      <MainNavigation />

    </Provider>


  );
}


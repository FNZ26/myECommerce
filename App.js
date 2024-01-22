import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNavigation from './src/navegation/MainNavigation';

import 'react-native-gesture-handler';

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
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
/*
-------- ToDo: ----------
Funcional:
Custom Drawer:
  -hacer funcionar las  nuevas opciones  de cada parte del drawer:
    -Info Cuenta (perfil)
    -Home
    -Buscar
    -Notificaciones
    -Miis Compras
    -Favoritos
    -Hisorial
    -Categorias

    // Display de allProducts
    -Descubrir

-hacer screen home
-Sumar boton carrito
-arreglar los navigates
-Poner  a andar el search
-redux: asignar un allProducts para mostrar sin necesidad de elegir category
-Arreglar Firebase y conectar la data desde ahi
-Arreglar el login de la app (Activar Local Storage)
-Corregir el flatlist que no llega a mostrar correctamente todos los items category y products
-Sumar boton cerrar sesion
  
 
Estetico:
  -Custom Drawer
  -Estilos
  -Cambiar colores app general  VVV
  -Cambiar Font 
  -Display de Categorias (flatlist horizontal para home)
  -Sumar Iconos a categorias (firebase)

  

------------------------------
*/

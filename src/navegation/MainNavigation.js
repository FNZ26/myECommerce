
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import RootNavigation from './RootNavigation';


const MainNavigation = () => {

//useSelector(state => state.sliceAuth.user);
//ToDo: Poner el codigo de arriba para  habilitar  el login
//sumar local Storage y habilitar el login
//Terminar login (poner signo de pregunta que al hacer click, brinde un usuario de preuba)
const user  = true;
  
  return (
    <NavigationContainer>
      {user ?   <RootNavigation /> : <AuthNavigation/>}
         
  
    </NavigationContainer>

  );
}

export default MainNavigation


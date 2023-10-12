
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import TabNavegation from './TabNavegation';
import { useSelector } from 'react-redux';

const MainNavigation = () => {

//useSelector(state => state.sliceAuth.user);
//ToDo: Poner el codigo de arriba para  habilitar  el login
const user  = true;
  
  return (
    <NavigationContainer>
      {user ? <TabNavegation/> : <AuthNavigation/>}
         
  
    </NavigationContainer>

  );
}

export default MainNavigation


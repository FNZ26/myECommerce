import React from 'react'
import Category from '../screens/Category';
import Home from '../screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerHeader from '../components/DrawerHeader';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import Notifications from '../screens/Notifications';
import shoppingCart from '../screens/shoppingCart';
import Saved from '../screens/Saved';
import History from '../screens/History';
import ShoppingHistory from '../screens/ShoppingHistory';
import Profile from '../screens/Profile';


const Drawer = createDrawerNavigator();
            
const RootNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={(props) => <DrawerHeader {...props} />}
            backBehavior={'history'}>
            <Drawer.Screen component={Home} name="home" />
            <Drawer.Screen component={Notifications} name="notifications" />
            <Drawer.Screen component={ProductDetail} name="productDetail" />
            <Drawer.Screen component={Products} name="products" /> 
            <Drawer.Screen component={Category} name="category" />
            <Drawer.Screen component={Saved} name="saved" />
            <Drawer.Screen component={History} name="history" />
            <Drawer.Screen component={shoppingCart} name="shoppingCart" />
            <Drawer.Screen component={ShoppingHistory} name="shoppingHistory" />
            <Drawer.Screen component={Profile} name="profile" />
        </Drawer.Navigator>
    )
}

export default RootNavigation


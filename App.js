import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/pages/HomeScreen";
import WishlistScreen from "./src/pages/WishlistScreen";
import {enableScreens} from 'react-native-screens';
import {Image, StyleSheet} from "react-native";
import OrdersScreen from "./src/pages/OrdersScreen";
import ProfileScreen from "./src/pages/ProfileScreen";
import {Provider} from 'react-redux'
import store from "./src/store";

enableScreens();

const TabNav = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <TabNav.Navigator screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'rgb(239, 42, 57)',
                        height: 90,
                    },
                    tabBarShowLabel: false
                }}>
                    <TabNav.Screen name="HomeScreen" component={HomeScreen} options={{
                        tabBarIcon: () => (
                            <Image source={require("./src/assets/images/img.png")} style={styles.logo}/>
                        ),
                        headerShown: false
                    }}/>
                    <TabNav.Screen name="OrdersScreen" component={OrdersScreen} options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={require("./src/assets/images/img_1.png")} style={styles.logo}/>)
                    }}/>
                    <TabNav.Screen name="ProfileScreen" component={ProfileScreen} options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={require("./src/assets/images/img_3.png")} style={styles.logo}/>)
                    }}/>
                    <TabNav.Screen name="WishlistScreen" component={WishlistScreen} options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={require("./src/assets/images/img_2.png")} style={styles.logo}/>)
                    }}/>
                </TabNav.Navigator>
            </NavigationContainer>
        </Provider>

    );
}

const styles = StyleSheet.create({
    logo: {
        width: 24,
        height: 24,
    },
});

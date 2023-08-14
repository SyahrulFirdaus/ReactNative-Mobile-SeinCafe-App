import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Details, Akun, Splash } from '../Pages';
import { BottomNavigator } from '../Component';
import Home from '../Pages/Home'
import SignIn from '../Pages/Home/signIn'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <Tab.Screen name="Favorite" component={Home} options={{ headerShown: false }} />
//       <Tab.Screen name="Search" component={Details} options={{ headerShown: false }} />
//       <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} />

//     </Tab.Navigator>
//   )
// }

const Router = () => {
  return (

    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({

})
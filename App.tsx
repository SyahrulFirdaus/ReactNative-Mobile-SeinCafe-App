import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/Router'
import Home from './src/Pages/Home';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#f5b201" translucent={true} />
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

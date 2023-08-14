import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Logo } from 'assets/Image';
import { IconLogoCoffe } from 'assets';
import { WARNA_PRIMARY } from '../../utils';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 4000)
  }, [navigation]);

  return (
    <ImageBackground source={Logo} style={styles.background}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <IconLogoCoffe style={{
          marginTop: -100
        }} />
        <Text style={styles.label}>Sein Coffe</Text>
        <Text style={styles.Text}>
          build a colorful mood
        </Text>
      </View>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#000000',
    textAlign: 'center',
    marginTop: -50
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 12,
    color: WARNA_PRIMARY,
    textAlign: 'center',
    letterSpacing: 2,
  }

})
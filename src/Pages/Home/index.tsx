import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconLogoCoffe, IconSein } from 'assets'

const Home = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: WARNA_PUTIH
    }}>

      <View style={{
        alignItems: 'center',
        marginTop: 120
      }}>
        <IconLogoCoffe />
        <IconSein style={{
          marginTop: -45
        }} />
        <Text style={{
          letterSpacing: 6,
          paddingTop: 10,
          fontWeight: 'bold'
        }}>SEIN CAFE</Text>
      </View>
      <View style={{
        backgroundColor: WARNA_PRIMARY,
        width: '100%',
        height: '70%',
        marginTop: 60,
        borderRadius: 30
      }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 25,
          paddingLeft: 25,
          paddingTop: 45
        }}>Welcome</Text>
        <Text style={{
          paddingLeft: 25,
          fontSize: 13,
          paddingRight: 25,
          paddingTop: 10,
          textAlign: 'justify'
        }}>
          Welcome, have fun at our cafe because what we provide will always be remembered until now, later, and now we are just enjoying this longing.        </Text>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 40
        }}>
          <TouchableOpacity onPress={() =>

            navigation.navigate('SignIn')}>

            <View style={{
              backgroundColor: '#000000',
              width: 140,
              marginLeft: 29,
              justifyContent: 'center',
              alignItems: 'center',
              height: 45,
              borderRadius: 40,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}>
              <Text style={{
                color: WARNA_PUTIH,
                fontWeight: 'bold'
              }}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginHorizontal: 10 }}></View>

          <TouchableOpacity>
            <View style={{
              backgroundColor: WARNA_PUTIH,
              width: 140,
              justifyContent: 'center',
              alignItems: 'center',
              height: 45,
              borderRadius: 40,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}>
              <Text style={{
                fontWeight: 'bold'
              }}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
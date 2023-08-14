import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_DISABLE, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconArrowLeft, IconArrowRight, IconFacebook, IconGoggle, IconLogoCoffe, IconSein } from 'assets'

const SignIn = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: WARNA_PRIMARY
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 60,
                marginHorizontal: 20
            }}>
                <IconArrowLeft />
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Home')}>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>Register</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    marginTop: 20,
                    paddingLeft: 20,
                    fontSize: 28,
                    fontWeight: 'bold'
                }}>Sign In</Text>
                <Text style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontSize: 12,
                    paddingTop: 10
                }}>
                    Welcome to sein cafe, please login to enjoy our dishes and don't forget to be happy always.
                </Text>
            </View>
            <View style={{
                backgroundColor: WARNA_PUTIH,
                width: '100%',
                height: '70%',
                marginTop: 60,
                borderRadius: 25
            }}>
                <View style={{
                    backgroundColor: '#EEEDED',
                    width: 310,
                    height: 53,
                    borderRadius: 20,
                    marginTop: 40,
                    marginHorizontal: 24,
                    justifyContent: 'center',
                    paddingLeft: 15,
                }}>
                    <Text style={{
                        color: WARNA_CONTENT
                    }}>Username</Text>
                </View>
                <View style={{
                    backgroundColor: '#EEEDED',
                    width: 310,
                    height: 53,
                    borderRadius: 20,
                    marginTop: 15,
                    marginHorizontal: 24,
                    justifyContent: 'center',
                    paddingLeft: 15,
                }}>
                    <Text style={{
                        color: WARNA_CONTENT
                    }}>Password</Text>
                </View>

                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{
                        paddingRight: 30,
                        fontWeight: 'bold',
                        fontSize: 13,
                        paddingTop: 5
                    }}>Forgot Password?</Text>
                </View>

                <View style={{
                    backgroundColor: '#000000',
                    width: 310,
                    height: 53,
                    borderRadius: 20,
                    marginTop: 20,
                    marginHorizontal: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: WARNA_PUTIH,
                        fontWeight: 'bold',
                        fontSize: 15
                    }}>Sign In</Text>
                </View>


                <View style={{
                    backgroundColor: WARNA_PUTIH,
                    width: 310,
                    height: 53,
                    borderRadius: 20,
                    marginTop: 40,
                    marginHorizontal: 24,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 14,
                        marginHorizontal: 20
                    }}>
                        <IconGoggle />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>Continue with Goggle</Text>
                        <IconArrowRight />
                    </View>
                </View>

                <View style={{
                    backgroundColor: WARNA_PUTIH,
                    width: 310,
                    height: 53,
                    borderRadius: 20,
                    marginTop: 20,
                    marginHorizontal: 24,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 14,
                        marginHorizontal: 20
                    }}>
                        <IconFacebook />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>Continue with Facebook</Text>
                        <IconArrowRight />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})
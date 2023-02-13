import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen(props) {
  return (
     <ImageBackground 
        style={styles.background}
        source={require('../assets/zoro.jpeg')} >
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={{color: '#fff'}}>The master of the blade</Text>
          </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center', 
  }, 
  loginButton: {
    width: '100%', 
    height: 70, 
    backgroundColor: 'white', 
  }, 
  logoContainer: {
    position: 'absolute', 
    top: 50, 
    alignItems: 'center', 
  }, 
  logo: {
    width: 75,
    height: 75,
  }, 
  registerButton: {
    width: '100%', 
    height: 70, 
    backgroundColor: '#808080', 
  }, 
}); 

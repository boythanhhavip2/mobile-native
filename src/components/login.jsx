import React from 'react';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';

const App = () => {
  const backgroundImage = require('../assets/bacg.jpg');
  const overlayImage  = require('../assets/logo1.png');
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}/>
          <View style={styles.overlay}>
            <Image source={overlayImage } style={styles.overlayImage}/>
          </View>
            <Text style={[styles.text, styles.topText]}>HSSK</Text>
            <Text style={[styles.text, styles.bottomText]}>Hồ sơ sức khỏe</Text>
        
      </View>
      <View style={styles.box2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',

  },
  box1: {
    width: '100%',
    height: 303,
    zIndex: 999,
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: '100%',
    height: 548,
    backgroundColor: 'green',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    zIndex: 1000,
    marginTop: -36,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 300,
    position: 'relative',
    resizeMode: 'cover',
  },
  overlayImage: {
    width: 99,
    height: 99,
    position: 'absolute',
    right: 10,
    bottom: '70%',
    resizeMode: 'contain',
    overlayColor: '#007AFE'
  
  },
  overlay:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    position: 'absolute',
    left: '48%',
    color: 'white',
    textAlign: 'center',
  },
  topText: {
    top: '36%',
    fontSize: 32,
    fontWeight: 700,
    
  },
  bottomText: {
    bottom: '42%',
    fontSize: 18,
    fontWeight: 500
  },
  
});

export default App;

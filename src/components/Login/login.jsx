import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SplitLayout />
    </NavigationContainer>
  );
}

function SplitLayout() {
  const navigation = useNavigation();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const image = require('../../assets/img/bacg.jpg');

  const onPressTitle = () => {
    console.log('đăng kí');
  };

  const onPressButton = () => {
    navigation.navigate('Home');
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangePhoneNumber = (text) => {
    setPhoneNumber(text);
  };

  const headForgot = () => {
    console.log('quên mật khẩu');
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} behavior="padding">
      <View style={styles.container}>
        <View style={styles.top}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image} />
        </View>

        <Text style={styles.login}>Đăng Nhập</Text>

        <ScrollView>
          <View style={styles.bottom}>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChangePhoneNumber}
                value={phoneNumber}
                placeholder="Nhập Số Điện Thoại"
                keyboardType="numeric"
                onSubmitEditing={dismissKeyboard}
              />
              {phoneNumberError !== '' && <Text style={styles.errorText}>{phoneNumberError}</Text>}
              <Icon name="phone" size={20} color="#888" style={styles.icon} />
            </View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Nhập mật khẩu"
                keyboardType="default"
                secureTextEntry={true}
                onSubmitEditing={dismissKeyboard}
              />
              {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
              <Icon name="phone" size={20} color="#888" style={styles.icon} />
            </View>

            <Text style={styles.Forgot} onPress={headForgot}>
              Quên mật khẩu?
            </Text>

            <View style={styles.containers}>
              <TouchableOpacity style={styles.button} onPress={onPressButton}>
                <Text style={styles.buttonText}>Đăng Nhập</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
              <Text style={styles.text1} onPress={onPressTitle}>
                Đăng Kí Ngay
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: 300,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    marginTop: 30,
  },
  login: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 22,
    fontWeight: '500',
    color: '#000',
  },
  input: {
    height: 44,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    paddingLeft: 30,
  },
  Forgot: {
    fontSize: 15,
    color: '#00008B',
    left: 270,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    marginRight: 10,
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    left: 20,
  },
  icon: {
    marginRight: 10,
  },
  text1: {
    color: '#0A62CE',
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  containers: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#141ED2',
    paddingVertical: 15,
    width: 370,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

import {  View } from 'react-native'
import React, { Component } from 'react'
import Login from './src/components/login'
export class App extends Component {
  render() {
    return (
      <View>
        <Login/>
      </View>
    )
  }
}

export default App
// App.js (Using react-native-arkit)
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// --- Import react-native-arkit ---
import { ARKit } from 'react-native-arkit';

export default class App extends Component {
  render() {
    console.log("App component rendering - react-native-arkit test");
    return (
      <View style={styles.container}>
        <ARKit
          style={{ flex: 1 }}
          debug
          planeDetection 
          lightEstimation 

        >

          <ARKit.Text
            text="ARKit Works!"
            position={{ x: 0, y: 0, z: -0.5 }}
            font={{ size: 0.1, depth: 0.05 }}
            material={{ color: 'yellow' }}
          />
        </ARKit>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
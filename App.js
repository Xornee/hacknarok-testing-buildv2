// App.js
import React from 'react';
import { StyleSheet, View, Text, LogBox } from 'react-native'; // Added LogBox
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingStateConstants, // Import for tracking status (optional but good practice)
} from '@viro-community/react-viro';

// Ignore specific warnings that Viro might generate - adjust as needed
LogBox.ignoreLogs(['Warning: ViewPropTypes will be removed from React Native']);
LogBox.ignoreLogs(['`new Viro()`']); // Ignore Viro constructor warning if it appears

// Define our initial AR Scene component
const HelloWorldSceneAR = () => {
  const [trackingInitialized, setTrackingInitialized] = React.useState(false);

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setTrackingInitialized(true);
      console.log('AR Tracking Initialized');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
      console.log('AR Tracking Lost');
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/* Only render text when tracking is initialized */}
      {trackingInitialized ? (
        <ViroText
          text="Hello AR World!"
          scale={[0.2, 0.2, 0.2]} // Smaller scale
          position={[0, 0, -1]} // 1 meter in front of the user
          style={styles.helloWorldTextStyle}
        />
      ) : (
        <ViroText
          text="Initializing AR..." // Show initializing text
          scale={[0.3, 0.3, 0.3]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      )}
    </ViroARScene>
  );
};

// Main App component which renders the AR scene navigator
export default function App() {
  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR, // Use our defined scene
        }}
        style={styles.navigator} // Use flex: 1 style here
      />
      {/* You could overlay 2D UI elements here if needed */}
      {/* <View style={styles.overlay}>
        <Text style={styles.overlayText}>My AR Game UI</Text>
      </View> */}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the outer view fills the screen
    position: 'relative', // Needed for absolute positioning of overlays
  },
  navigator: {
    flex: 1, // Ensure the AR navigator takes up the available space
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial', // Use standard fonts available on device
    fontSize: 20, // Adjusted font size
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  // Example overlay styles (optional)
  /*
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 18,
  },
  */
});
// App.js (Viro Load Test Version)
import React from 'react';
import { StyleSheet, View, Text, LogBox } from 'react-native';

// --- Viro Imports - KEEP THESE ---
// We import them to ensure they are linked and loaded by the app
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';
// --- End Viro Imports ---

// Ignore specific warnings that Viro might generate - adjust as needed
LogBox.ignoreLogs(['Warning: ViewPropTypes will be removed from React Native']);
LogBox.ignoreLogs(['`new Viro()`']); // Ignore Viro constructor warning if it appears


// --- Viro Scene Definition - KEEP THIS ---
// We define it but don't use it immediately
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
      {trackingInitialized ? (
        <ViroText
          text="Hello AR World!"
          scale={[0.2, 0.2, 0.2]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      ) : (
        <ViroText
          text="Initializing AR..."
          scale={[0.3, 0.3, 0.3]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      )}
    </ViroARScene>
  );
};
// --- End Viro Scene Definition ---


// --- Main App Component - MODIFIED ---
// It imports Viro but only renders simple Text initially
export default function App() {
  console.log("App component rendering - Viro Load Test"); // Add a log

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Viro Components Loaded Test</Text>
      {/* We are NOT rendering <ViroARSceneNavigator> here */}
    </View>
  );
}
// --- End Main App Component ---


// --- Styles - KEEP THESE ---
const styles = StyleSheet.create({
  container: { // Style for the simple test view
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0', // Light yellow background
  },
  text: { // Style for the test text
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  // Styles below are for the Viro components (kept for when re-enabled)
  navigator: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
// --- End Styles ---
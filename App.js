// App.js (Simplified Test Version)
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // Import only basic components

// Main App component - simplified
export default function App() {
  return (
    // Use a View to take up the whole screen and center content
    <View style={styles.container}>
      {/* Display the simple text */}
      <Text style={styles.text}>im working</Text>
    </View>
  );
}

// Basic styles for centering and text
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#F5FCFF', // Simple light blue background
  },
  text: {
    fontSize: 24, // Make text reasonably large
    fontWeight: 'bold', // Make text bold
    color: '#333333', // Dark grey text color
  },
});
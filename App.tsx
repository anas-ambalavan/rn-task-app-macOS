/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Text>Welcome! Let's build a MacOS App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {flex: 1},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;

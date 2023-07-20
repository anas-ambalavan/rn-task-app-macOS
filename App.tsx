/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <View style={styles.item}>
          <RadioButton
            value={'Subscribe to notJust.dev'}
            status={'checked'}
            color="royalblue"
          />
          <Text style={styles.itemTitle}>Subscribe to notJust.dev</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {flex: 1},
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#211D2D',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#454547',
    paddingVertical: 5,
  },
  itemTitle: {
    flex: 1,
    marginLeft: 5,
  },
});

export default App;

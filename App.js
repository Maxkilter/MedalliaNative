/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import type {Node} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MyContext} from './src/context';
import {Screen1, Screen2} from './src/components';

const App: () => Node = () => {
  const {screen} = useContext(MyContext);

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View>{screen === 1 ? <Screen1 /> : <Screen2 />}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

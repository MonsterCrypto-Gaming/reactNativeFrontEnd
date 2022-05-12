/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {DARK} from './Theme/Theme';
import {Home, Market, Friends} from './Screens';

const App = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: DARK.BACKGROUND_COLOR,
      }}>
      <Friends />
    </SafeAreaView>
  );
};

export default App;

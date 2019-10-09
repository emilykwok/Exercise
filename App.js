/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Nicole from './nicole/Nicole';
import Contacts from './nicole/Nicole';
import About from './nicole/About';
import styles from './styles/AppStyles';


function App(){
  return(
      <View style={styles.app}>
        <Text>Hi Myteam</Text>
        <Nicole />
        <Contacts />
        <About />
      </View>
    )
}

export default App;

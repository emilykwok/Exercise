/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Start from './Ashlynn/Start.js';
import Contacts from './Ashlynn/Contacts.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

function App(){
  return(
    <View>
      <Start />
      <Contacts />
    </View>

    )
}





export default App;

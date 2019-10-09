/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/AppStyles';

function Start(){
  return (
    <View style={styles.start}>
      <Image
      source={{uri:'http://koinet.net/zz/images/panda3b.jpg'}}
      />
      <Text>Guys I'm scared</Text>
    </View>
  );
}

export default Start;

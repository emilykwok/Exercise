import React from 'react';
import {View, Text, Image} from 'react-native';

function Start(){
  return(
      <View>
        <Text>This is a doggo</Text>
        <Image
          source={{uri:'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'}}
          />
      </View>

  )
}

export default Start;

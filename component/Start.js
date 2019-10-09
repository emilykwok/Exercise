import React from 'react';
import{View, Text,Image} from 'react-native';
import test from '../component/Contacts';
import About from '../component/About';

function Start(){
  return(
    <View>
    <Image source={{url:"https://justbirding.com/wp-content/uploads/2018/12/most-beautiful-birds-Tyto-alba.jpg"}}
style={{width:250,height:250,top:100}}/>
<test />
<About />
  </View>
)
}
export default Start;

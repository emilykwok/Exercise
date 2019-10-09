import React from 'react';
import{View, Text,Image} from 'react-native';


function About(){
  return(
    <View>
    <Text>My team Info</Text>
    <Text>Team member:Nicole,Emily,Ashlynn,Dora</Text>
    <Image source={{url:"https://earthnworld.com/wp-content/uploads/2018/11/Sun-Flower.jpg"}}
style={{width:250,height:250,top:100}}/>

    </View>
)
}
export default About;

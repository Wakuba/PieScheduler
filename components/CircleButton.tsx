import React from 'react';
import {View,Text, TouchableHighlight} from 'react-native';

type props = {
  wholeStyle:Object,
  textStyle:Object,
  onPress:any,
  children:string
}

export default function CircleButton(props:props) {

  return (
    <TouchableHighlight 
      style={props.wholeStyle}
      onPress={props.onPress} >
      <View >
  <Text style={props.textStyle}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  )
}


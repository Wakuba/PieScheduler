import React from 'react';
import {View,Text, TouchableHighlight,StyleSheet} from 'react-native';

type props = {
  wholeStyle:Object,
  textStyle:Object,
  onPress:any,
  children:string
}

export default function CircleButton(props:props) {

  return (
    <TouchableHighlight 
      style={[props.wholeStyle,styles.circleButton]}
      onPress={props.onPress} >
      <View >
  <Text style={props.textStyle}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  circleButton:{
    borderRadius:48,
    backgroundColor:'#E31676',
  }
})
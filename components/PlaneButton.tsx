import React from 'react';
import {View,Text, TouchableHighlight,StyleSheet} from 'react-native';

type props = {
  wholeStyle:Object,
  textStyle:Object,
  onPress:any,
  children:string
}

export default function PlaneButton(props:props) {
  const {wholeStyle,textStyle,onPress,children} = props;

  return (
    <TouchableHighlight 
      style={[wholeStyle,styles.circleButton]}
      onPress={onPress} >
      <View >
  <Text style={textStyle}>{children}</Text>
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
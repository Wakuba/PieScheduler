import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function CircleButton() {
  return (
    <View style={styles.circleButton} >
      <Text style={styles.circleButtonItem} >+</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  circleButton:{
    position:'absolute',
    right:32,
    bottom:32,
    width:80,
    height:80,
    backgroundColor:'#E31676',
    borderRadius:48,
    justifyContent:'center',
    alignItems:'center',
  },
  circleButtonItem:{
    fontSize:48,
  },
})
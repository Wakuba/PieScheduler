import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import CircleButton from './CircleButton'

export default function EditParts(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>渡ってくるデータ</Text>
    <CircleButton 
      wholeStyle={styles.editButton} 
      textStyle={styles.textStyle} 
      onPress={props.onPress} > 編集 </CircleButton>
    <CircleButton 
      wholeStyle={styles.delButton} 
      textStyle={styles.textStyle} 
      onPress={props.onPress} > 削除 </CircleButton>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    // flex:3,
    // display:'flex',
    justifyContent:'space-between',
    alignContent:'center',
    // alignItems:'center',
    flexDirection:'row',
    marginHorizontal:30
  },
  text:{
    borderBottomWidth:1.5,
  },
  editButton:{
  },
  delButton:{
  },
  textStyle:{

  }

})
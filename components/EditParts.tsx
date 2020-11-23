import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import PlaneButton from './PlaneButton'

export default function EditParts(props) {
  const {onPressEdit,onPressDel} = props
  return (
    <View style={styles.container}>
        <Text style={styles.text}>渡ってくるデータ</Text>
        <PlaneButton 
          wholeStyle={styles.editButton} 
          textStyle={styles.textStyle} 
          onPress={onPressEdit} > 編集 </PlaneButton>
        <PlaneButton 
          wholeStyle={styles.delButton} 
          textStyle={styles.textStyle} 
          onPress={onPressDel} > 削除 </PlaneButton>
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
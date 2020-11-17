import React from 'react';
import { View } from 'react-native';
import PickerTab from './PickerTab';
import EditParts from './EditParts';

export default function EditPartsBoard (props) {

  //onPress配列を作らないとだめ
  // let onPressArray = []
  let parts = [...Array(props.partNumber)].map((i)=><EditParts key={i} onPress={()=>props.navigation.navigate('PreEdit')} />)

  return (
  <View> 
    {parts}
  </View>
  )
}
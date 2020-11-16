import React from 'react';
import { View } from 'react-native';
import PickerTab from './PickerTab'



export default function PickerTabBoard (props) {

  let tabs = [...Array(props.tabNumber)].map((i)=><PickerTab key={i} />)

  return (
  <View> 
    {tabs}
  </View>
  )
}
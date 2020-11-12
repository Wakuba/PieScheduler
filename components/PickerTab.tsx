import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { hourArray, minuteArray } from './PickerValue';

export default function PickerTab() {
return (
  <View style={styles.wholePicker}>
    <Text style={styles.text}>時間</Text>
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={hourArray}
      style={pickerSelectStyles}
      placeholder={{ label: 'hour', value: '' }}
      Icon={() => (<Text style={styles.pickerToggle}>▼</Text>)}
    />
    <Text style={styles.colon}>:</Text>
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={minuteArray}
      style={pickerSelectStyles}
      placeholder={{ label: 'minute', value: '' }}
      Icon={() => (<Text style={styles.pickerToggle}>▼</Text>)}
    />
  </View>
)
}

const styles = StyleSheet.create({
  wholePicker:{
    // position:'relative',
    // flex:1,
    // alignItems:'stretch',
    // justifyContent:'flex-start',
    marginVertical:4,
    // marginLeft:20,
    flexDirection:'row',
  },
  text:{
    // marginTop:20,
    fontSize:23,
    marginHorizontal:10,
    marginVertical:11,
  },
  colon:{
    fontSize:40,
    marginHorizontal:10,
  },
  pickerToggle:{
    marginRight:18, 
    marginVertical: 12, 
    fontSize: 20,
    color: '#789' 
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 28,
    paddingVertical: 6,
    paddingRight:20,
    paddingLeft:9,
    marginHorizontal:10,
    borderWidth: 1.5,
    borderColor: '#789',
    borderRadius: 4,
    width:120,
  },
  inputAndroid: {
    // fontSize: 16,
    // // paddingHorizontal: 10,
    // // paddingVertical: 8,
    // borderWidth: 0.5,
    // borderColor: '#789',
    // borderRadius: 8,
    // // color: 'black',
    // paddingRight: 30, // to ensure the text is never behind the icon
    // // width: '50%',
    // // marginLeft: 10,
    // backgroundColor:'#eee'
  },
});
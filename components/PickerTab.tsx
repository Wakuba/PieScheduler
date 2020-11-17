import React, { useState } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from 'react-navigation';

let createPickerItem = (acc:Object[],cur,index:number ) => {{
  acc[acc.length] = <Picker.Item label={String(cur)} value={String(index)} />
};
  return acc;
}

const minuteValue = [...Array(60).keys()].filter(x=>{return x%5==0});
const minuteArray = minuteValue.reduce(createPickerItem,[]);

const hourValue = [...Array(24).keys()];
const hourArray = hourValue.reduce(createPickerItem,[]);

type SelectedData = {

}

export default function PickerTab() {
  
  const [hourStart,setHourStart] = useState({value:0});
  const [minuteStart,setMinuteStart] = useState({value:0});
  const [hourEnd,setHourEnd] = useState({value:0});
  const [minuteEnd,setMinuteEnd] = useState({value:0});
  // const selectedTime = pickerProps
  // const selectedData:SelectedData = {x:, y:}; 
return (
  <SafeAreaView>
  <View>
  <View style={styles.wholePicker}>
  <Text style={styles.text}>開始</Text>
    <Picker
      selectedValue={hourStart}
      style={styles.picker}
      onValueChange={(itemValue,itemPosition) => setHourStart(itemValue)}>
        {hourArray}
    </Picker>
    <Text style={styles.colon}>:</Text>
    <Picker
      selectedValue={minuteStart}
      style={styles.picker}
      onValueChange={(itemValue,itemPosition) => setMinuteStart(itemValue)}>
        {minuteArray}
    </Picker>
  </View>
  <View style={styles.wholePicker}>
  <Text style={styles.text}>終了</Text>
    <Picker
      selectedValue={hourEnd}
      style={styles.picker}
      onValueChange={(itemValue,itemPosition) => setHourEnd(itemValue)}>
        {hourArray}
    </Picker>
    <Text style={styles.colon}>:</Text>
    <Picker
      selectedValue={minuteEnd}
      style={styles.picker}
      onValueChange={(itemValue,itemPosition) => setMinuteEnd(itemValue)}>
        {minuteArray}
    </Picker>
  </View>
  </View>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  wholePicker:{ 
    // marginVertical:4,
    flexDirection:'row',
  },
  text:{
    fontSize:25,
    marginVertical:95,
  },
  colon:{
    fontSize:40,
    marginHorizontal:8,
    marginVertical:11,
    top:70
  },
  pickerToggle:{
    marginRight:18, 
    marginVertical: 12, 
    fontSize: 20,
    color: '#789' 
  },
  picker:{
    // fontSize: 3,
    paddingVertical: 0,
    paddingRight:20,
    paddingLeft:6,
    marginHorizontal:10,
    // marginVertical:10,
    // borderWidth: 1.5,
    // borderColor: '#789',
    // borderRadius: 4,
    width:100,
  }
});
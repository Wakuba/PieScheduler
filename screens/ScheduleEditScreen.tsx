import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Text,StyleSheet} from 'react-native';
import { hourArray, minuteArray } from '../components/TimePullDown';


export const ScheduleEditScreen = () => {
  return (
    <Text style={{ marginTop: 60 }}>
    <Text style={{ marginVertical: 20, marginLeft: 30 }}>スケジュール作成</Text>
    
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={hourArray}
      style={pickerSelectStyles}
      placeholder={{ label: '時間を選択してください', value: '' }}
      Icon={() => (<Text style={{ position: 'absolute', right: 95, top: 10, fontSize: 18, color: '#789' }}>▼</Text>)}
    />
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={minuteArray}
      style={pickerSelectStyles}
      placeholder={{ label: '時間を選択してください', value: '' }}
      Icon={() => (<Text style={{ position: 'absolute', right: 95, top: 10, fontSize: 18, color: '#789' }}>▼</Text>)}
    />
    </Text>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#789',
    borderRadius: 4,
    color: '#789',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 300,
    marginLeft: 30
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#789',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 280,
    marginLeft: 30,
    backgroundColor:'#eee'
  },
});
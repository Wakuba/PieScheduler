import React from 'react';
import { SafeAreaView,StyleSheet, TextInput} from 'react-native';
import PickerTab from '../components/PickerTab';

const ScheduleEditScreen = () => {
  
  const [textValue,setTextValue] = React.useState('スケジュール名');
  return (
    <SafeAreaView style={styles.container} >
    <TextInput 
      style={styles.textInput}
      value={textValue}
      onChangeText={textValue => setTextValue(textValue)}
      />
      <PickerTab/>
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  textInput:{
    fontSize:30,
    color:'rgba(0,0,0,0.3)',
    width:'60%',
    height:40,
    paddingHorizontal:20
  },
})

export default ScheduleEditScreen;
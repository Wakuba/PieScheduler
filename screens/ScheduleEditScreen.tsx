import React , { useState }from 'react';
import { SafeAreaView,StyleSheet} from 'react-native';
import PickerTabBoard from '../components/PickerTabBoard';
import {ButtonBoard} from '../components/ButtonBoard'

export const ScheduleEditScreen = () => {
  
  let initialNumber = 1
  const [tabNumber, setTabNumber] = useState(initialNumber);

  const createNewTab = () => {
    setTabNumber(prevNumber => {return prevNumber +1 ;})
}
  const deleteLastTab = () => {
    setTabNumber(prevNumber => prevNumber -1)
  }

  return (
    <SafeAreaView style={styles.container} >
      <PickerTabBoard tabNumber = {tabNumber}/>
      <ButtonBoard 
        onPressPlus={createNewTab} 
        onPressMinus={deleteLastTab}
        />
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    // flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
})

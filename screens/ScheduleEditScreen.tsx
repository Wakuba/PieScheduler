import React from 'react';
import { SafeAreaView,StyleSheet} from 'react-native';
import CircleButton from '../components/CircleButton';
import PickerTabScreen from '../screens/PickerTabScreen';


export const ScheduleEditScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
     <PickerTabScreen/>
     <CircleButton/>
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
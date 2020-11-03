import React from 'react';
import {SafeAreaView,Text,StyleSheet} from 'react-native';

export const ScheduleEditScreen = () => {
  return (
    <SafeAreaView style={style.container}>
    <Text style={{fontSize:40,}}>編集画面だよ</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center', 
  },
});
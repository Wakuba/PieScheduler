import React from 'react';
import { View,StyleSheet } from 'react-native';
// import ButtonBoard from '../components/ButtonBoard'
import EditParts from '../components/EditParts';
import CircleButton from '../components/PlaneButton'

const WholeEditScreen = (props) => {
  const {navigation} = props
  return (
    <View style={styles.container} >
    <EditParts
      onPressEdit={() => {navigation.navigate('PreEdit')}}
      onPressDel={console.log('Not yet')} />
    <CircleButton 
      textStyle={styles.text}
      wholeStyle={styles.whole}
      onPress={console.log('Sorry')}>+</CircleButton>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignContent:'center'
  },
  text:{
    fontSize:48
  }, 
  whole:{
    width:80,
    height:80,
    marginHorizontal:15,
    //中身のアイコンのスタイリング
    position:'absolute',
    right:32,
    bottom:32,
    flexDirection:'row',
  }
})

export default WholeEditScreen;
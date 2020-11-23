import React from 'react';
import { View,StyleSheet } from 'react-native';
// import ButtonBoard from '../components/ButtonBoard'
import EditPartsBoard from '../components/EditPartsBoard';
import CircleButton from '../components/CircleButton'

const WholeEditScreen = () => {
  const [partNumber,setPartNumber] = React.useState(1)

  const createNewParts = () => {
    setPartNumber(prevNumber => {return prevNumber +1 ;})
}

  return (
    <View style={styles.container} >
    <EditPartsBoard partNumber={partNumber}/>
    <CircleButton 
      textStyle={styles.text}
      wholeStyle={styles.whole}
      onPress={createNewParts}>+</CircleButton>
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
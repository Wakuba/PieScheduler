import React from 'react';
import CircleButton from './CircleButton'
import { View , StyleSheet} from 'react-native';

type props = {
  onPressPlus:any,
  onPressMinus:any,
}

export const ButtonBoard = (props:props) => {
  return (
    <View style={styles.container}>

      <CircleButton
        wholeStyle={styles.plusButton} 
        textStyle={styles.circleButtonItem1}
        onPress={props.onPressPlus} 
        >
        +
      </CircleButton>
      
      <CircleButton
        wholeStyle={styles.minusButton} 
        textStyle={styles.circleButtonItem2}
        onPress={props.onPressMinus}
        >
        -
      </CircleButton>

    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    right:32,
    bottom:32,
    // flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  plusButton:{
    // position:'absolute',
    // right:32,
    // bottom:32,
    width:80,
    height:80,
    marginHorizontal:15,
    backgroundColor:'#E31676',
    borderRadius:48,
    //中身のアイコンのスタイリング
    justifyContent:'center',
    alignItems:'center',
  },
  minusButton:{
    // position:'absolute',
    // right:120,
    // bottom:32,
    width:80,
    height:80,
    marginHorizontal:15,
    backgroundColor:'#E31676',
    borderRadius:48,
    //中身のアイコンのスタイリング
    justifyContent:'center',
    alignItems:'center',
  },
  circleButtonItem1:{
    fontSize:48,
  },
  circleButtonItem2:{
    fontSize:60,}
})
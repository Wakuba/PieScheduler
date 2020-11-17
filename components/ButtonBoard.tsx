import React from 'react';
import CircleButton from './CircleButton'
import { View , StyleSheet} from 'react-native';

type Props = {
  onPressPlus:any,
  onPressMinus:any,
}

export default function ButtonBoard (props:Props) {
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
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  plusButton:{
    width:80,
    height:80,
    marginHorizontal:15,
    //中身のアイコンのスタイリング
    justifyContent:'center',
    alignItems:'center',
  },
  minusButton:{
    width:80,
    height:80,
    marginHorizontal:15,
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
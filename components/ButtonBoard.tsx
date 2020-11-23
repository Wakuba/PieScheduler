import React from 'react';
import CircleButton from './PlaneButton'
import { View , StyleSheet} from 'react-native';

export default function ButtonBoard (props) {
  const {onPressPlus,onPressMinus} = props;
  return (
    <View style={styles.container}>

      <CircleButton
        wholeStyle={styles.plusButton} 
        textStyle={styles.circleButtonItem1}
        onPress={onPressPlus} 
        >
        +
      </CircleButton>
      
      <CircleButton
        wholeStyle={styles.minusButton} 
        textStyle={styles.circleButtonItem2}
        onPress={onPressMinus}
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
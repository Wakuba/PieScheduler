import React, { useState } from "react";
import { Dimensions,View } from "react-native";
import Svg from "react-native-svg";
import { getTime } from "../helpers/time";
import ClockTicks from "./ClockTicks";
import Hand from "./Hand";
import { useInterval } from "../helpers/hooks";
import FanShape from "./FanShape";
import EditButton from './EditButton'
import {center, radius, height, width} from '../helpers/positionValue'
import {Picker} from '@react-native-picker/picker';


const hourTickCount = 24;

export const Clock = (props) => {
  const {onPress} = props
  const [time, setTime] = useState(getTime);
  const [startAngle, setStartAngle] = useState(40)
  const [finishAngle, setFinishAngle] = useState(70)
  const [color, setColor] = useState("yellow")

  useInterval(() => {
    setTime(getTime);
  }, 100);

  const HoursLine = () => {
    return <Hand
              angle={time.hours}
              center={center}
              radius={radius/0.55}
              strokeWidth="5"
              stroke='#333'
            />
  }

  return (
    <View>
      <View style={{flexDirection:'row'}}>
    <Picker
    selectedValue={startAngle}
    style={{height: 50, width: 100}}
    onValueChange={(itemValue)=>{let itemValueSetter = Number(itemValue); setStartAngle(itemValueSetter)}}
    >
        <Picker.Item label="40" value={40} />
        <Picker.Item label="70" value={70} />
        <Picker.Item label="100" value={100} />
        <Picker.Item label="130" value={130} />
        <Picker.Item label="160" value={160} />
        <Picker.Item label="190" value={190} />
        <Picker.Item label="210" value={210} />
    </Picker>
    <Picker
    selectedValue={finishAngle}
    style={{height: 50, width: 100,}}
    onValueChange={(itemValue) =>{let itemValueSetter = Number(itemValue); setFinishAngle(itemValueSetter)}
    }>
        <Picker.Item label="70" value={70} />
        <Picker.Item label="100" value={100} />
        <Picker.Item label="130" value={130} />
        <Picker.Item label="160" value={160} />
        <Picker.Item label="190" value={190} />
        <Picker.Item label="210" value={210} />
        <Picker.Item label="240" value={240} />
    </Picker>
    <Picker
    selectedValue={color}
    style={{height: 50, width: 100,}}
    onValueChange={(itemValue) =>{let itemValueSetter = String(itemValue); setColor(itemValueSetter)}
    }>
        <Picker.Item label="yellow" value="yellow" />
        <Picker.Item label="green" value="green" />
        <Picker.Item label="red" value="red" />
        <Picker.Item label="blue" value="blue" />
        <Picker.Item label="black" value="black" />
        <Picker.Item label="white" value="white" />
        <Picker.Item label="orange" value="orange" />
    </Picker>
    </View>

    <Svg height={width} width={width} style={{marginTop:150}}>
      <FanShape 
        startDegree={startAngle}
        finishDegree={finishAngle}
        color={color}
        />
      <FanShape 
        startDegree={200} 
        finishDegree={240} 
        color="red" 
      />
      <FanShape
        startDegree={243}
        finishDegree={380}
        color="green" 
      />
      <ClockTicks
        hours={hourTickCount}
        radius={radius}
        center={center}
      />
      <HoursLine />
    </Svg>
    <EditButton onPress={onPress} />

  </View>
  );
};

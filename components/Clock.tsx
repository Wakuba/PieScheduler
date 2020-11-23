import React, { useState } from "react";
import { Dimensions,View } from "react-native";
import Svg from "react-native-svg";
import { getTime } from "../helpers/time";
import ClockTicks from "./ClockTicks";
import Hand from "./Hand";
import { useInterval } from "../helpers/hooks";
import FanShape from "./FanShape";
import ClockEditButton from './ClockEditButton'
import { GestureResponderEvent } from "react-native";


const { width } = Dimensions.get("window");
const diameter = width / 2.5;
const center = width /2;
const radius = diameter / 2;
const hourTickCount = 24;

type Props = {
    onPress:(event: GestureResponderEvent) => void;
}

export const Clock = (props:Props) => {
    const {onPress} = props
    let [time, setTime] = useState(getTime);

    useInterval(() => {
      setTime(getTime);
    }, 100);

    const HoursLine = () => {
      return <Hand
                angle={time.hours}
                center={center}
                radius={radius/0.55}
                strokeWidth="5"
                strokeOpacity= "0.5"
                stroke='#333'
              />
    }

    return (
      <View>
          <Svg height={width} width={width}>
              <FanShape 
                startDegree={70}
                finishDegree={150}
                color='yellow'
              />
              <FanShape 
                startDegree={200} 
                finishDegree={240} 
                color="red" 
              />
              <FanShape
                startDegree={253}
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
          <ClockEditButton onPress={onPress} />
      </View>
    );
};

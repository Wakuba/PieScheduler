import React, { useState } from "react";
import { Button, Dimensions,StyleSheet, View } from "react-native";
import Svg from "react-native-svg";
import { getTime } from "../helpers/time";
import ClockTicks from "./ClockTicks";
import Hand from "./Hand";
import { useInterval } from "../helpers/hooks";
import styled from "styled-components";
import FanShape from "./FanShape";

const { width } = Dimensions.get("window");
const diameter = width / 2.5;
const center = width /2;
const radius = diameter / 2;
const hourTickCount = 24;


export const Clock = (props) => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 100);


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
        color="red" />
      <FanShape
        startDegree={253}
        finishDegree={380}
        color="green" />
      <ClockTicks
        hours={hourTickCount}
        radius={radius}
        center={center}
      />
      <Hours
        angle={time.hours}
        center={center}
        radius={radius/0.55}
        strokeWidth="5"
      />
    </Svg>
    <Button
      onPress={props.onPress}
      title="編集"
      style={styles.button}
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
  );
};

const Hours = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.8",
}))``;

//ボタンを真ん中にしたいができない
const styles = StyleSheet.create({
  button:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

// [
//   { x: "睡眠", y: 7},
//   { x: "身支度", y: 1 },
//   { x: "座学", y: 2 },
//   { x: "実習", y: 4 },
//   { x: "レポート作成", y: 2 },
//   { x: "部活", y: 3 },
//   { x: "自由", y: 5 }
// ]
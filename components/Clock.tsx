import React, { useState } from "react";
import { Button, Dimensions,StyleSheet, View } from "react-native";
import Svg from "react-native-svg";
import { getTime } from "../helpers/time";
import ClockTicks from "./ClockTicks";
import Hand from "./Hand";
import { useInterval } from "../helpers/hooks";
import styled from "styled-components";
import { VictoryLabel, VictoryPie } from "victory-native";

const { width } = Dimensions.get("window");
const diameter = width / 2.5;
const center = width /2;
const radius = diameter / 2;
const hourTickCount = 24;


export const Clock = ({onPress}) => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 100);


  return (
    <View>
    <Svg height={width} width={width}>
      <VictoryPie  innerRadius={105} data={[
      { x: "睡眠", y: 7},
      { x: "身支度", y: 1 },
      { x: "座学", y: 2 },
      { x: "実習", y: 4 },
      { x: "レポート作成", y: 2 },
      { x: "部活", y: 3 },
      { x: "自由", y: 5 }
  ]}/>
      <VictoryLabel
        textAnchor="middle" verticalAnchor="middle"
        x={200} y={230}
        style={{fontSize: 20,fontFamily:"Hiragino Mincho ProN"}}
        text="タイトル"
      />
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
      onPress={onPress}
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
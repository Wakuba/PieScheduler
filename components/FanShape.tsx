import React from 'react';
import { Dimensions } from 'react-native';
import { Path, } from 'react-native-svg';

const { width } = Dimensions.get("window");
const diameter =width/2.24;
const center = width /2;
const radius = diameter / 2 +12;

type Props={
    startDegree:number, 
    finishDegree:number, 
    color:string
}

export default function FanShape(
    { startDegree, finishDegree, color }:Props
    ) {
    let cx = center;
    let cy = center;
    let r = diameter;
    //円弧の始まりの座標;
    let startX = cx + r * Math.sin(startDegree / 180 * Math.PI);
    let startY = cy - r * Math.cos(startDegree / 180 * Math.PI);
    //円弧の終わり座標;
    let finishX = cx + r * Math.sin(finishDegree / 180 * Math.PI);
    let finishY = cy - r * Math.cos(finishDegree / 180 * Math.PI);
    //扇形の角度が180度を超えているか;
    let largeArcFlag = (finishDegree - startDegree <= 180) ? 0 : 1;
    //内円
    let innerRadius = radius
    let innerStartX = cx + innerRadius * Math.sin(startDegree / 180 * Math.PI);
    let innerStartY = cy - innerRadius * Math.cos(startDegree / 180 * Math.PI);
    //円弧の終わり座標;
    let innerFinishX = cx + innerRadius * Math.sin(finishDegree / 180 * Math.PI);
    let innerFinishY = cy - innerRadius * Math.cos(finishDegree / 180 * Math.PI);
    
    //円弧を描くコマンド;
    return <Path 
            d={`M${innerStartX},${innerStartY} 
                A${innerRadius},${innerRadius} 0 ${largeArcFlag} 1 ${innerFinishX},${innerFinishY}
                L${finishX},${finishY}
                A${r},${r} 0 ${largeArcFlag} 0 ${startX},${startY} 
                Z`} 
            fill={`${color}`} 
            stroke="blue" 
            stroke-width="30" />
    };

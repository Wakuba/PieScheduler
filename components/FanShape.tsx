import React from 'react';
import { Path, } from 'react-native-svg';
import {diameter,centerWidth,radius} from '../helpers/positionValue'

type Props={
    startDegree:number, 
    finishDegree:number, 
    color:string
}

export default function FanShape(
    { startDegree, finishDegree, color }:Props
    ) {
    let cx = centerWidth;
    let cy = centerWidth;
    let r = diameter;
    let startX = cx + r * Math.sin(startDegree / 180 * Math.PI);
    let startY = cy - r * Math.cos(startDegree / 180 * Math.PI);
    let finishX = cx + r * Math.sin(finishDegree / 180 * Math.PI);
    let finishY = cy - r * Math.cos(finishDegree / 180 * Math.PI);
    let largeArcFlag = (finishDegree - startDegree <= 180) ? 0 : 1;
    let innerRadius = radius
    let innerStartX = cx + innerRadius * Math.sin(startDegree / 180 * Math.PI);
    let innerStartY = cy - innerRadius * Math.cos(startDegree / 180 * Math.PI);
    let innerFinishX = cx + innerRadius * Math.sin(finishDegree / 180 * Math.PI);
    let innerFinishY = cy - innerRadius * Math.cos(finishDegree / 180 * Math.PI);
    
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

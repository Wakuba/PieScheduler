import React from 'react';
import { Path, } from 'react-native-svg';
import {outerRadius,innerRadius, centerWidth,} from '../helpers/positionValue'

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

    //円弧の始まりの座標;
    let startX = cx + outerRadius * Math.sin(startDegree / 180 * Math.PI);
    let startY = cy - outerRadius * Math.cos(startDegree / 180 * Math.PI);

    //円弧の終わり座標;
    let outerFinishX = cx + outerRadius * Math.sin(finishDegree / 180 * Math.PI);
    let outerFinishY = cy - outerRadius * Math.cos(finishDegree / 180 * Math.PI);

    //扇形の角度が180度を超えているか;
    let largeArcFlag = (finishDegree - startDegree <= 180) ? 0 : 1;
    
    //内円
    let innerStartX = cx + innerRadius * Math.sin(startDegree / 180 * Math.PI);
    let innerStartY = cy - innerRadius * Math.cos(startDegree / 180 * Math.PI);
    
    //円弧の終わり座標;
    let innerFinishX = cx + innerRadius * Math.sin(finishDegree / 180 * Math.PI);
    let innerFinishY = cy - innerRadius * Math.cos(finishDegree / 180 * Math.PI);
    
    //円弧を描くコマンド;
    return <Path 
            d={`M${innerStartX},${innerStartY} 
                A${innerRadius},${innerRadius} 0 ${largeArcFlag} 1 ${innerFinishX},${innerFinishY}
                L${outerFinishX},${outerFinishY}
                A${outerRadius},${outerRadius} 0 ${largeArcFlag} 0 ${startX},${startY} 
                Z`} 
            fill={`${color}`} 
            fillOpacity="0.5"
            stroke="blue" 
            stroke-width="30" />
    };

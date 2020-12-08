import React from 'react';
import { View } from 'react-native';
import { G, Path, Text} from 'react-native-svg';
import {outerRadius,innerRadius, centerWidth,} from '../helpers/positionValue'
import {adjustableScale} from '../helpers/positionValue'
type Props={
    startDegree:number;
    finishDegree:number; 
    color:string;
    children:String;
}



export default function FanShape(
    { startDegree, finishDegree, color, children }:Props
    ) {
    const cx = centerWidth;
    const cy = centerWidth;

    //円弧の始まりの座標;
    const outerStartX = cx + outerRadius * Math.sin((startDegree+90) / 180 * Math.PI);
    const outerStartY = cy - outerRadius * Math.cos((startDegree+90) / 180 * Math.PI);

    //円弧の終わり座標;
    const outerFinishX = cx + outerRadius * Math.sin((finishDegree+90) / 180 * Math.PI);
    const outerFinishY = cy - outerRadius * Math.cos((finishDegree+90) / 180 * Math.PI);

    //扇形の角度が180度を超えているか;
    const largeArcFlag = ((finishDegree+90) - (startDegree+90) <= 180) ? 0 : 1;
    
    //内円
    const innerStartX = cx + innerRadius * Math.sin((startDegree+90) / 180 * Math.PI);
    const innerStartY = cy - innerRadius * Math.cos((startDegree+90) / 180 * Math.PI);
    
    //円弧の終わり座標;
    const innerFinishX = cx + innerRadius * Math.sin((finishDegree+90) / 180 * Math.PI);
    const innerFinishY = cy - innerRadius * Math.cos((finishDegree+90) / 180 * Math.PI);

    //弧の中点
    const outerMediumX = cx + outerRadius * Math.sin(((startDegree+finishDegree)/2+90) / 180 * Math.PI);
    const innerMediumX = cx + innerRadius * Math.sin(((startDegree+finishDegree)/2+90) / 180 * Math.PI);
    const outerMediumY = cy - outerRadius * Math.cos(((startDegree+finishDegree)/2+90) / 180 * Math.PI);
    const innerMediumY = cy - innerRadius * Math.cos(((startDegree+finishDegree)/2+90) / 180 * Math.PI);

    //ラベルのポジション
    const xPositionOfLabel = outerMediumX/2 + innerMediumX/2
    const yPositionOfLabel = outerMediumY/2 + innerMediumY/2

    //円弧を描くコマンド;
    return <G>
            <Text
            fill="black"
            stroke={color}
            fontSize={adjustableScale(45)}
            fontWeight="bold"
            x={xPositionOfLabel}
            y={yPositionOfLabel}
            textAnchor="middle"
            >{children}</Text>
            <Path 
            d={`M${innerStartX},${innerStartY} 
                A${innerRadius},${innerRadius} 0 ${largeArcFlag} 1 ${innerFinishX},${innerFinishY}
                L${outerFinishX},${outerFinishY}
                A${outerRadius},${outerRadius} 0 ${largeArcFlag} 0 ${outerStartX},${outerStartY} 
                Z`} 
            fill={color} 
            fillOpacity="0.5"
            stroke="grey" 
            stroke-width="0" />
            </G>
    };

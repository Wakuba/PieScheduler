import React from 'react';
import { Path, } from 'react-native-svg';
import {diameter,centerWidth,radius} from '../helpers/positionValue'

type Props={
    startDegree:number, 
    finishDegree:number, 
    color:string
}

const FanShape = (props:Props) => {
    const { startDegree, finishDegree, color } = props;

    const cx = centerWidth;
    const cy = centerWidth;
    const outerRadius = diameter;

    //円弧の始まりの座標;
    const outerStartX = cx + outerRadius * Math.sin(startDegree / 180 * Math.PI);
    const outerStartY = cy - outerRadius * Math.cos(startDegree / 180 * Math.PI);

    //円弧の終わり座標;
    const outerFinishX = cx + outerRadius * Math.sin(finishDegree / 180 * Math.PI);
    const outerFinishY = cy - outerRadius * Math.cos(finishDegree / 180 * Math.PI);

    //扇形の角度が180度を超えているか;
    const largeArcFlag = (finishDegree - startDegree <= 180) ? 0 : 1;
    
    //内円
    const innerRadius = radius
    const innerStartX = cx + innerRadius * Math.sin(startDegree / 180 * Math.PI);
    const innerStartY = cy - innerRadius * Math.cos(startDegree / 180 * Math.PI);
    
    //円弧の終わり座標;
    const innerFinishX = cx + innerRadius * Math.sin(finishDegree / 180 * Math.PI);
    const innerFinishY = cy - innerRadius * Math.cos(finishDegree / 180 * Math.PI);
    
    //円弧を描くコマンド;
    return <Path 
            d={`M${innerStartX},${innerStartY} 
                A${innerRadius},${innerRadius} 0 ${largeArcFlag} 1 ${innerFinishX},${innerFinishY}
                L${outerFinishX},${outerFinishY}
                A${outerRadius},${outerRadius} 0 ${largeArcFlag} 0 ${outerStartX},${outerStartY} 
                Z`} 
            fill={`${color}`} 
            stroke="blue" 
            stroke-width="30" />
    };
 export default FanShape;
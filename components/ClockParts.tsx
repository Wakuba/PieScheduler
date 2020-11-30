import React, { useState } from "react";
import { getTime } from "../helpers/time";
import ClockTicks from "./ClockTicks";
import Hand from "./Hand";
import { useInterval } from "../helpers/hooks";
import { width, centerWidth} from '../helpers/positionValue'

const diameter = width / 2.5;
const radius = diameter / 2;
const hourTickCount = 24;

export const HoursLine = () => {
    const [time, setTime] = useState(getTime);

    useInterval(() => {
      setTime(getTime);
    }, 100);
      return <Hand
                angle={time.hours}
                center={centerWidth}
                radius={radius/0.55}
                strokeWidth="5"
                strokeOpacity= "0.5"
                stroke='#333'
              />
    }

export const Clock = () => {
    return <ClockTicks 
            hours={hourTickCount}  
            radius={radius}
            center={centerWidth}
          />;
};

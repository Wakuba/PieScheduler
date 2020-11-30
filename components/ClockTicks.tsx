import React from "react";
import { G, Line, Text } from "react-native-svg";
import { polarToCartesian } from "../helpers/geometry";

type Props = {
    radius: number;
    center: number;
    hours: number;
};

const ClockTicks = (props: Props) => {
    const { radius, center, hours } = props;
    const hoursArray = new Array(hours).fill(1);

    const hourSticks = hoursArray.map((hour, index) => {
        const start = polarToCartesian(center, center, radius - 10, index * 30);
        const end = polarToCartesian(center, center, radius-13, index * 30);
        const time = polarToCartesian(center, center, radius - 27, index * 30);

        const HourLine = () => {
            return <Line 
                stroke="#333"
                strokeWidth={3}
                strokeLinecap="round"
                x1={start.x}
                x2={end.x}
                y1={start.y}
                y2={end.y}
                />
        };

        const HourNumber = (props:any) => {
            return <Text 
                    fill='#333'
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="bold"
                    alignmentBaseline="central"
                    x={time.x}
                    y={time.y}
                    >
                    {props.children}
                </Text>
        }

        return (
            <G key={index}>
                <HourLine />
                <HourNumber >
                    {index}
                </HourNumber>
            </G>
        );
    });

    return (
        <G>
            {hourSticks}
        </G>
    );
};

export default ClockTicks;

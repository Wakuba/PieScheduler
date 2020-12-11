import { Dimensions,Platform, PixelRatio } from "react-native";

export const { width, height } = Dimensions.get("window");

//FanShape-component's position
export const outerRadius =width/2.24;
export const innerRadius = outerRadius / 2 +12;

//Clock-component's position
export const diameter = width / 2.5;
export const center = width /2;
export const radius = diameter / 2;

//shared position
export const centerWidth = width /2;
export const centerHeight = height / 2;

const fontScale = width / 880
export const adjustableScale = (size:number) => {
    const newSize = size * fontScale 
    if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}



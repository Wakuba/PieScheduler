import { Dimensions } from "react-native";

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

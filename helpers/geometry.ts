export function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  //度数法をラジアンへ
  const angleInRadians = ((angleInDegrees-180) * Math.PI) / 360.0;

  return {
    x: centerX + (radius+30) * Math.cos(angleInRadians),
    y: centerY + (radius+30) * Math.sin(angleInRadians),
  };
}

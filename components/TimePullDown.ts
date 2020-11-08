
let createTimeJSON = (acc:Object[],cur:number,index:number ) => {
  acc[acc.length]={label:String(cur),value:String(index)};
  return acc;
}
const minuteValue = [...Array(60).keys()].filter(x=>{return x%5==0});
export const minuteArray = minuteValue.reduce(createTimeJSON,[]);

const hourValue = [...Array(24).keys()];
export const hourArray = hourValue.reduce(createTimeJSON,[]);

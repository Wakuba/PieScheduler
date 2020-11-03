

type TimeObject = {
  hours: number;
};

//Date()オブジェクトから実際の時間を取得する
//引数なしでTimeObject型としてreturn
export const getTime = (): TimeObject => {
  
  //make an instance "date" from object "Date()"
  const date = new Date();
  //get "Hours" from the instance "date" by a method "getHours" ,12時間制に変換 ,最後に角度に変換
  const hours = (date.getHours() / 24) * 360;
  return {hours};
};

export const getDateTimeInAngles = (dateTime: Date): TimeObject => {
  const hours = (dateTime.getHours() / 24) * 360;
  return {hours};
};

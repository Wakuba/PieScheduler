

type TimeObject = {
  hours: number;
};

export const getTime = (): TimeObject => {
  
  const date = new Date();
  const hours = (date.getHours() / 24) * 360;
  return {hours};
};

export const getDateTimeInAngles = (dateTime: Date): TimeObject => {
  const hours = (dateTime.getHours() / 24) * 360;
  return {hours};
};

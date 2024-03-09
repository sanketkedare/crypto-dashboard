export const days = [{ indicator: "1D", time: 1 },{ indicator: "1W", time: 7 },{ indicator: "1M", time: 30 },{ indicator: "1Y", time: 365 }];
export const year = Array.from({ length: 365 }, (_, index) => index + 1);
export const month = ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"];
export const aDay = Array.from({ length: 24 }, (_, index) => index + 1);
export const week = Array.from({ length: 7 }, (_, index) => index + 1);


export const getPrice = (data, name) => Object.values(data).find((item) => item.name === name);

export const daySwitch = (day) =>
{
  switch (day) {
    case 1: return (aDay);
    case 7: return (week);
    case 30:return (month);
    default: return (year);
  }
}


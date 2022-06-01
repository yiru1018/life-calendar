import dayjs from 'dayjs';

function getMonth(month = dayjs().month(), rowOfDate = 5) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(rowOfDate).fill([]).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCount += 1;
      return dayjs(new Date(year, month, currentMonthCount));
    })
  );
  return daysMatrix;
}

export default getMonth;

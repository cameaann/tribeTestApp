import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

const weeksArrays = {};

function getWeeksArray(personId) {

  if (!weeksArrays[personId]) {
    const weeksArray = [];
    const currentWeek = dayjs().isoWeek();

    for (let i = 0; i < 7; i++) {
      const weekStart = dayjs()
        .isoWeek(currentWeek + i)
        .startOf("isoWeek");

      const days = [];
      const today = dayjs();

      for (let j = 0; j < 7; j++) {
        const day = weekStart.add(j, "day");
        days.push({
          id: dayjs(day).format("dd") + day.format("DD/MM"),
          name: dayjs(day).format("dd"),
          date: day.format("DD/MM"),
          selected: false,
          available: today.isBefore(day, 'day') || today.isSame(day, 'day')
        });
      
      }

      weeksArray.push({
        week: currentWeek + i,
        days: days,
      });
    }
    weeksArrays[personId] = weeksArray;
  }
  return weeksArrays[personId];
}

export { getWeeksArray };

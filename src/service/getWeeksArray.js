import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(weekOfYear);

const weeksArrays = {};

function getWeeksArray(personId) {

  if (!weeksArrays[personId]) {
    const weeksArray = [];
    const currentWeek = dayjs().week();

    for (let i = 0; i < 7; i++) {
      const weekStart = dayjs()
        .week(currentWeek + i)
        .startOf("week");

      const days = [];

      for (let j = 0; j < 7; j++) {
        const day = weekStart.add(j, "day");
        days.push({
          id: dayjs(day).format("dd") + day.format("DD/MM"),
          name: dayjs(day).format("dd"),
          date: day.format("DD/MM"),
          selected: false,
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

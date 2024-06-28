import CalendarHeader from "./CalendarHeader";
import Week from "./Week";
import { useState, useEffect } from "react";

const Calendar = ({ user, saveCalendar, userId }) => {
  const [weeksArray, setWeeksArray] = useState(user.calendar);

  useEffect(() => {
    setWeeksArray(user.calendar);
  }, [userId]);

  const onToggleSelected = (week, dayId) => {
    let updatedWeeks = weeksArray.map((w) => {
      if (w.week === week) {
        let updatedDays = w.days.map((day) => {
          if (day.id === dayId) {
            day.selected = !day.selected;
          }
          return day;
        });
        w.days = updatedDays;
      }
      return w;
    });
    setWeeksArray(updatedWeeks);
  };

  const handleClick = () => {
    saveCalendar(weeksArray);
  };

  return (
    <section>
      <h3>My availability for the next 7 weeks</h3>

      <CalendarHeader />
      {weeksArray.map((week, index) => (
        <Week
          key={index}
          week={week.week}
          days={week.days}
          toggleSelected={onToggleSelected}
        />
      ))}
      <button className="btn save" onClick={handleClick}>
        Save info
      </button>
    </section>
  );
};

export default Calendar;

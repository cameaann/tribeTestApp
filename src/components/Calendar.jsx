import CalendarHeader from "./CalendarHeader";
import Week from "./Week";
import { useState, useEffect } from "react";
import { getWeeksArray } from "../service/getWeeksArray";

const Calendar = ({ saveCalendar, userId}) => {

    console.log(userId);
    const userWeeksArray = getWeeksArray(userId);
    const [weeksArray, setWeeksArray] = useState(userWeeksArray);
    
    useEffect(() => {
      setWeeksArray(userWeeksArray)
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

    const handleClick = ()=>{
        saveCalendar(weeksArray)
    }

  return (
    <>
      <CalendarHeader />
      {weeksArray.map((week, index) => (
        <Week
          key={index}
          week={week.week}
          days={week.days}
          toggleSelected={onToggleSelected}
        />
      ))}
      <button className="btn save" onClick={handleClick}>Save info</button> 
    </>
  );
};

export default Calendar;

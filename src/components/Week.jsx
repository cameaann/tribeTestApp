// import { useState } from "react";
import Day from "./Day";

const Week = ({week, days, toggleSelected}) => {
  const onToggleSelected = (dayId) => {
    toggleSelected(week, dayId);
  };

  return (
    <div className="week-block">
      <span className="week-num">{week}</span>
      {days.map((day) => (
        <Day
          key={day + day.name}
          toggleSelected={onToggleSelected}
          day={day}
        />
      ))}
    </div>
  );
};
export default Week;

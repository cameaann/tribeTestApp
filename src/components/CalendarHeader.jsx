import Day from "./Day";

const CalendarHeader = () => {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <>
      <div className="week-block week-header">
        <span className="week-num">N</span>
        {days.map((day, i) => (
          <Day key={i} day={day} />
        ))}
      </div>
    </>
  );
};
export default CalendarHeader;

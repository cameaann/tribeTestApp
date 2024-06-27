import { useContext, useState, useEffect } from "react";
import Week from "./Week";
import { UserContext } from "./UserContext";
import { getWeeksArray } from "../service/getWeeksArray";

const Profile = () => {
  const { users, selectedUserId, updateUser } = useContext(UserContext);
  const currentUser = users[selectedUserId];

  const userWeeksArray = getWeeksArray(selectedUserId);
  const [weeksArray, setWeeksArray] = useState(userWeeksArray);
  
  useEffect(() => {
    setWeeksArray(userWeeksArray)
  }, [userWeeksArray]);

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

  const saveProfile = () => {
    const userInfo = {...currentUser, calendar: weeksArray};
    updateUser(userInfo);
  }

  return (
    <div className="availability-section">
      <h3>{currentUser.name}&apos;s availability for the next 7 weeks</h3>
      {weeksArray.map((week, index) => (
        <Week
          key={index}
          week={week.week}
          days={week.days}
          toggleSelected={onToggleSelected}
        />
      ))}
      <button className="btn save" onClick={saveProfile}>Save info</button>
    </div>
  );
};

export default Profile;

import { useContext } from "react";
import { UserContext } from "./UserContext";
import Calendar from "./Calendar";

const Profile = () => {
  const { users, selectedUserId, updateUser } = useContext(UserContext);
  let currentUser = users[selectedUserId];

  const saveProfile = (weeksArray) => {
    console.log(weeksArray);
    const userInfo = {...currentUser, calendar: weeksArray};
    updateUser(userInfo);
  }

  return (
    <div className="availability-section">
      <h3>{currentUser.name}&apos;s availability for the next 7 weeks</h3>

      <Calendar user={currentUser} userId={selectedUserId} saveCalendar={saveProfile}/>

    </div>
  );
};

export default Profile;

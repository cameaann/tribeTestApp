import { useContext } from "react";
import { UserContext } from "./UserContext";
import Calendar from "./Calendar";
import FriendsInfo from "./FriendsInfo";

const Profile = () => {
  const { users, selectedUserId, updateUser } = useContext(UserContext);
  let currentUser = users[selectedUserId];

  const saveProfile = (weeksArray) => {
    const userInfo = {...currentUser, calendar: weeksArray};
    updateUser(userInfo);
  }

  return (
    <div className="profile">
      <Calendar user={currentUser} userId={selectedUserId} saveCalendar={saveProfile}/>
      <FriendsInfo currentUser={currentUser} users={users}/>
    </div>
  );
};

export default Profile;

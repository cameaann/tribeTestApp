import { useContext } from "react";
import { UserContext } from "./UserContext";

const Header = () => {

    const { users, selectedUserId, handleChange } =  useContext(UserContext);
    const handleOnChange = (event) =>{
        const selected = event.target.value;
        handleChange(selected)
    }

    console.log(selectedUserId);

  return (
    <div className="header">

      <span>Select user</span>
      <select
        className="select-user"
        onChange={handleOnChange}
      >
        {users.map((user, index) => (
          <option key={index} value={index}>{user.name}</option>
        ))}
      </select>
      <span>{users[selectedUserId].name}&apos;s profile</span>
    </div>
  );
};
export default Header;

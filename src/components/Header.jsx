import { useContext } from "react";
import { UserContext } from "./UserContext";

const Header = () => {
  const { users, selectedUserId, handleChange } = useContext(UserContext);
  const handleOnChange = (event) => {
    const selected = event.target.value;
    handleChange(selected);
  };

  const formatName = (val) =>{
    let fName = val.slice(0, 2).toUpperCase();
    return fName;
  }

  let av = formatName(users[selectedUserId].name);

  return (
    <div className="header">
      <div>
        <label>Select user</label>
        <select className="select-user" onChange={handleOnChange}>
          {users.map((user, index) => (
            <option key={index} value={index}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <span className="profile-sign">{av}</span>
    </div>
  );
};
export default Header;

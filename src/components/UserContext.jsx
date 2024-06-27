import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const people = [
    { id:0, name: "Anna", calendar: []},
    { id:1, name: "Lena", calendar: []},
    { id:2, name: "Misha", calendar: []}
  ];

  const [users, setUsers] = useState(people);
  const [selectedUserId, setSelectedUserId] = useState(0);

  const handleChange = (selectedId) => {
    setSelectedUserId(parseInt(selectedId));
  };

  const updateUser = (userInfo) =>{
    let updateUsers = users.map(user => {
      if(user.id === userInfo.id){
        console.log(userInfo.calendar);
        user.calendar = userInfo.calendar
      }
      return user;
    })
    setUsers(updateUsers);
  }

  console.log(users);

  return (
    <UserContext.Provider value={{ users, selectedUserId, handleChange, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

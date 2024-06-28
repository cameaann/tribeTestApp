import Friend from "./Friend";

const FriendsTable = ({ users, currentUser, item }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Friends</th>
          <th>Availability</th>
          <th>Action options</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => {
          if (user.id !== currentUser.id) {
            return <Friend key={i} user={user} item={item} />
          }
        })}
      </tbody>
    </table>
  );
};

export default FriendsTable;

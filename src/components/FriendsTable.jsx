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
      {users.length > 1 ? (
        <tbody>
          {users.map((user, i) => {
            if (user.id !== currentUser.id) {
              return <Friend key={i} user={user} item={item} />;
            }
          })}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td></td>
            <td className="td-centered">There are no users yet</td>
            <td></td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default FriendsTable;

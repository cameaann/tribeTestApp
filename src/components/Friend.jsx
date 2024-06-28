const Friend = ({ user, item }) => {
  return (
    <tr className="friend">
      <td>
        <a className="user-friend" href="#">
          <i className="fa-solid fa-user avatar"></i>
          {user.name}
        </a>
      </td>
      <td className="availability">{item}</td>
      <td>
        <i className="fa-solid fa-eye social active"></i>
        <i className="fa-brands fa-telegram social"></i>
        <i className="fa-solid fa-envelope social"></i>
        <i className="fa-solid fa-comment social"></i>
        <i className="fa-solid fa-user-xmark social"></i>
      </td>
    </tr>
  );
};

export default Friend;

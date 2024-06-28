import { useState } from "react";

const FriendsInfo = ({ users, currentUser }) => {
  const menuList = [
    { title: "All" },
    { title: "This Week" },
    { title: "Next Week" },
    { title: "Best Week" },
  ];

  const [item, setItem] = useState(menuList[1].title);

  const weeks = [];

  users.forEach((user) => {
    user.calendar.forEach((entry) => {
      if (!weeks.includes(entry.week)) {
        weeks.push(entry.week);
      }
    });
  });

  const result = weeks.map((week) => ({ week, people: [], selectedDaysCount: 0 }));

  users.forEach((user) => {
    user.calendar.forEach((entry) => {
      const weekEntry = result.find(
        (weekEntry) => weekEntry.week === entry.week
      );
      if (weekEntry) {
        const selectedDays = entry.days.filter((day) => day.selected === true);
        weekEntry.people.push({
          id: user.id,
          name: user.name,
          days: selectedDays,
        });
        weekEntry.selectedDaysCount += selectedDays.length;
      }
    });
  });
  let bestWeek = result[0];

  result.forEach(weekEntry => {
    if(weekEntry.selectedDaysCount>bestWeek.selectedDaysCount){
        bestWeek = weekEntry;
    }
  })

  const handleChange = (event) => {
    event.preventDefault();
    let week = event.target.value;
    setItem("Week " + week);
  };

  const handleClick = (event) => {
    event.preventDefault();
    let i = Number(event.target.value);

    if (i === 0) {
      setItem(menuList[1].title);
    }
    else if(i===3){
      setItem("Week "+ bestWeek.week)
    } 
    else {
      setItem(menuList[i].title);
    }
  };

  return (
    <section>
      <h3>{currentUser.name}&apos;s best friends</h3>
      <div className="availability-menu">
        <span>Availability</span>
        {menuList.map((item, i) => (
          <button
            className="availability-menu-item"
            key={i}
            value={i}
            onClick={handleClick}
          >
            {item.title}({users.length - 1})
          </button>
        ))}
        <select onChange={handleChange} defaultValue="">
          <option value="" disabled>
            Select week
          </option>
          {result.map((entry, index) => (
            <option key={index} value={entry.week}>
              week {entry.week}
            </option>
          ))}
        </select>
      </div>
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
              return (
                <tr key={i}>
                  <td>
                    <i className="fa-solid fa-user avatar"></i>
                    {user.name}
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
            }
          })}
        </tbody>
      </table>
    </section>
  );
};

export default FriendsInfo;

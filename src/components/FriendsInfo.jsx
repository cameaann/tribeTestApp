import { useState } from "react";
import FriendsTable from "./FriendsTable";

const FriendsInfo = ({ users, currentUser }) => {
  const initialMenuList = [
    { title: "All", active: false },
    { title: "This Week", active: false },
    { title: "Next Week", active: false },
    { title: "Best Week", active: false },
  ];

  const [menuList, setMenuList] = useState(initialMenuList);
  const [item, setItem] = useState(menuList[1].title);

  function createWeeksArray(users) {
    const weeks = [];
    users.forEach((user) => {
      user.calendar.forEach((entry) => {
        if (!weeks.includes(entry.week)) {
          weeks.push(entry.week);
        }
      });
    });

    return weeks.map((week) => ({
      week,
      people: [],
      selectedDaysCount: 0,
    }));
  }

  function populateWeeksArray(users, weeksArray) {
    users.forEach((user) => {
      user.calendar.forEach((entry) => {
        const weekEntry = weeksArray.find(
          (weekEntry) => weekEntry.week === entry.week
        );
        if (weekEntry) {
          const selectedDays = entry.days.filter(
            (day) => day.selected === true
          );

          weekEntry.people.push({
            id: user.id,
            name: user.name,
            days: selectedDays,
          });
          weekEntry.selectedDaysCount += selectedDays.length;
        }
      });
    });
  }

  function findBestWeek(weeksArray) {
    let bestWeek = weeksArray[0];
    weeksArray.forEach((weekEntry) => {
      if (weekEntry.selectedDaysCount > bestWeek.selectedDaysCount) {
        bestWeek = weekEntry;
      }
    });
    return bestWeek;
  }

  function groupPeopleById(users) {
    return users.map(user => {
      const userDays = [];
      user.calendar.forEach(week => {
        const selectedDays = week.days.filter(day => day.selected === true);
        userDays.push(...selectedDays);
      });
      return {
        id: user.id,
        name: user.name,
        days: userDays,
      };
    });
  }

  function processData(users) {
    const weeksArray = createWeeksArray(users);
    populateWeeksArray(users, weeksArray);
    const bestWeek = findBestWeek(weeksArray);
    const people = groupPeopleById(users);

    return { weeksArray, bestWeek, people };
  }

  const { weeksArray, bestWeek, people } = processData(users);


  const handleChange = (event) => {
    event.preventDefault();
    let week = event.target.value;
    setMenuList(initialMenuList);
    setItem("Week " + week);
  };

  const handleClick = (event) => {
    let i = Number(event.target.value);

    const updatedMenu = menuList.map((menuItem, index) => ({
      ...menuItem,
      active: i === index,
    }));

    setMenuList(updatedMenu);

    if (i === 0) {
      setItem(menuList[1].title);
    } else if (i === 3) {
      setItem("Week " + bestWeek.week);
    } else {
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
            className={
              item.active === true
                ? "active availability-menu-item"
                : "availability-menu-item"
            }
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
          {weeksArray.map((entry, index) => (
            <option key={index} value={entry.week}>
              week {entry.week}
            </option>
          ))}
        </select>
      </div>
      <FriendsTable users={people} currentUser={currentUser} item={item} />
    </section>
  );
};

export default FriendsInfo;

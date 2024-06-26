import Week from "./components/Week";
import { getWeeksArray } from "./service/getWeeksArray";
import './App.css'
import { useState } from "react";

const App = () => {

const [weeksArray, setWeeksArray] = useState(getWeeksArray());

const onToggleSelected = (week, dayId) =>{
  let updatedWeeks = weeksArray.map(w => {
    if(w.week === week){
      let updatedDays = w.days.map(day => {
        if(day.id === dayId){
          day.selected = !day.selected
        }
        return day;
      })
      w.days = updatedDays;
    }
    return w;
  })
  setWeeksArray(updatedWeeks)
}

console.log(weeksArray);

  return (
    <>
     <h3>My availability for the next 7 weeks</h3>
     {weeksArray.map((week, index) => <Week key = {index} week = {week.week} days = {week.days} toggleSelected={onToggleSelected}/>)}

    </>
  )
}

export default App

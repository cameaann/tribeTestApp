import Day from "./Day";

const Week = () =>{

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return(
        <div className="week-block">
        <span className="week-num">num</span>
        {days.map((day, i) => <Day key={i} name = {day}/>)}</div>
    )
}
export default Week;
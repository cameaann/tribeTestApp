
const Day = ({day, toggleSelected}) => {
    const onToggle = ()=>{
        toggleSelected(day.id)
    }

    return (
     <div className={day.available === false ? 'day-block disabled' : "day-block" && (day.selected === true ? "day-block selected" : "day-block")}  onClick={onToggle}>
        <span>{day.name ? '' : day}</span>
        <span>{day.date}</span>
     </div>
    )
}

export default Day;
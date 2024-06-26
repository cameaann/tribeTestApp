
const Day = ({day, toggleSelected}) => {
    const onToggle = ()=>{
        toggleSelected(day.id)
    }

    return (
     <div className={day.selected === true ? "day-block selected" : "day-block"} onClick={onToggle}>
        <span>{day.name}</span>
        <span>{day.date}</span>
     </div>
    )
}

export default Day;
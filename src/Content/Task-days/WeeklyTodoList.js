import React from "react";
import './WeeklyTodoList.css';
import AllTasks from "./Task";

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
function WeeklyTodoList({day}){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>{`${day} tasks`}  </div>
                {/* <div className='date'>Date/Time</div> */}
            </div>
            <AllTasks />
        </div>
    )
}


export default WeeklyTodoList;
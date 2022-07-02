import React from "react";
import '../Content.css';
import AllTasks from "./Task";


function WeeklyTodoList({day}){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>{`${day} tasks`}  </div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default WeeklyTodoList;
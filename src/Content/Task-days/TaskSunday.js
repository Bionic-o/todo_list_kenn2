import React from "react";
import '../Content.css';
import AllTasks from "./AllTasks";

function TaskSunday(){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>Sunday Tasks</div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default TaskSunday;
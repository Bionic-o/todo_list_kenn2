import React from "react";
import '../Content.css'
import AllTasks from "./AllTasks";

function TaskFriday(){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>Friday Tasks</div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default TaskFriday;
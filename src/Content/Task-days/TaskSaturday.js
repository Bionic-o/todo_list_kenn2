import React from "react";
import '../Content.css'
import AllTasks from "./AllTasks";

function TaskSaturday(){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>Saturday Tasks</div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default TaskSaturday;
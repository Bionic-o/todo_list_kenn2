
import React from "react";
import '../Content.css'
import AllTasks from "./AllTasks";

function TaskTuesday(){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>Tuesday Tasks</div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default TaskTuesday;


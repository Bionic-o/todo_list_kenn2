import React from "react";
import '../Content.css'
import AllTasks from "./AllTasks";

function TaskWednesday(){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>Wednesday Tasks</div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default TaskWednesday;
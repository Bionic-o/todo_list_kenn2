import React from "react";
import '../Content.css';
import AllTasks from "./AllTasks";

function TaskMonday(){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>Monday Tasks</div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default TaskMonday;
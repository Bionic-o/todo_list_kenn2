import React from "react";
import '../Content.css';
import AllTasks from "./AllTasks";

function TaskThursday(){
    return(
        <div className="AllTasks">
            <div className="days">
                <div>Thursday Tasks</div>
                <div className='date'>Date/Time</div>
            </div>
            <AllTasks />
        </div>
    )
}


export default TaskThursday;
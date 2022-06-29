// import Monday from './Content/Task-days/Monday';
import TaskMonday from './Task-days/TaskMonday';
import TaskTuesday from './Task-days/TaskTuesday';
import TaskWednesday from './Task-days/TaskWednesday';
import TaskThursday from './Task-days/TaskThursday';
import TaskFriday from './Task-days/TaskFriday';
import TaskSaturday from './Task-days/TaskSaturday';
import TaskSunday from './Task-days/TaskSunday';
function Content () {
    return (
        <div>
            <TaskMonday />
            <TaskTuesday />
            <TaskWednesday />
            <TaskThursday />
            <TaskFriday /> 
            <TaskSaturday /> 
            <TaskSunday /> 
        </div>
    )
}

export default Content;
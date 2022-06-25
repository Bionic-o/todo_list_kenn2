import '../Content.css';

const tasks = [
    'Prepare React Tutorial',
    'Prepare HTML Tutorial',
    'Prepare CSS Tutorial',
    'Prepare Javascript Tutorial',
];

function Tuesday(){
    const taskList = tasks.map((task, index)=>{
        return(
            <div key={index} id="todoItems">
                <li>{task}</li>
                <div className='task-buttons'>
                    <button id="done-btn">Done</button>
                    <button id="edit-btn">Edit</button>
                    <button id="delete-btn">Delete</button>
                </div>
            </div>
        )
    })
    return(
        <div className='Tuesday-tasks'>
            <div className="days">
                <div>Tuesday</div>
                <div className='date'>Date/Time</div>
            </div>
            <div className='tasks'>
                <input type="text" id="task-input" placeholder="Please add your task... "/>
                <button id="add-btn">Add Task</button>
            </div>
            {taskList}
        </div>
    )
}
export default Tuesday;
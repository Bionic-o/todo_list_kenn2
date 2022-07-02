import React, {useState} from 'react';
import "./Task.css"

/* const mockTask = [{
    id: "1",
    name: "doGrocery",
    isDone: false
}, {
    id: "2",
    name: "doDishes",
    isDone: true
}] */

function AllTasks(){
    const [getData, setGetData] = useState("")
    const [arrayData, setArrayData] = useState([])
    const [editData, setEditData] = useState(null)

    const randomId = new Date().getTime().toString()
    const inputData = (val) => {
        setGetData(val.target.value)
        //console.log(val)
    }
    const addTask = () => {
        //console.log(randomId)
        setArrayData((prev) => [{id: randomId, name: getData, isDone: false}, ...prev])
        setGetData("")
    }
    //console.log(arrayData)
    const deleteTask = (id) => {
        const newArray = arrayData.filter((singleTask) => singleTask.id !== id) 
        setArrayData(newArray)
    }
    const doneTask = (id) => {
            const colorTask = arrayData.map((singleTask) => {
                if (singleTask.id === id) {
                    singleTask.isDone = !singleTask.isDone}
                    return singleTask
            })
            setArrayData(colorTask)
            }
        //setDoneColor()
        /* const todoItem = document.getElementById('todoItems');
        todoItem.style.backgroundColor = '#39ed24'
        console.log('Am done!') */
    const editTask = () => {

    }
 
    return(
        <div className="allTasks">
            <div>
                <input type="text" 
                onChange={inputData} 
                value={getData} 
                id="todo-inputText"
                />
                <button id="add-btn" onClick={addTask}>Add Task</button>
            </div>
                 {arrayData.map((singleTask, index) => {
                     console.log(singleTask)
                     return (
                    <div className={singleTask.isDone ? "isDone todoItems" : "todoItems"} key={index}>
                        <div>
                            <p>{singleTask.name}</p>
                        </div>
                        <div>
                            <button onClick={() => doneTask(singleTask.id)}>Done</button>
                            <button>Edit</button>
                            <button onClick={() => deleteTask(singleTask.id)}>Delete</button>
                        </div>
                    </div>)
                    })}
            </div>
    )
}


export default AllTasks;
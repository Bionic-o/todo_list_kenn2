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
    const [editText, setEditText] =useState("")

    const randomId = new Date().getTime().toString()
    const inputData = (val) => {
        setGetData(val.target.value)
        //console.log(val)
    }
    const addTask = () => {
        if (getData === "") {
            alert("Please add a task!")
        } else {
            setArrayData((prev) => [{id: randomId, task: getData, isDone: false, editClicked: false}, ...prev])
            setGetData("")
        }
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
    const editTask = (id) => {
            const editText = arrayData.map((singleTask) => {
                if (singleTask.id === id) {
                    singleTask.editClicked = !singleTask.editClicked}
                    return singleTask
                })
            setEditData(editText)
            }
    const saveTask = (id) => {
        const savingTask = editData.map((singleTask) => {
            if (singleTask.id === id) {
                if (editText === "") {
                    alert("Please add a task!")
                }
                singleTask.task = editText;
                singleTask.editClicked = !singleTask.editClicked}
                return singleTask
        })
        setEditData(savingTask)
        setEditText("")
    }
    
 
    return(
        <div className="allTasks">
            <div>
                <input 
                type="text" 
                onChange={inputData} 
                value={getData} 
                id="todo-inputText"
                placeholder='Enter your new task...'
                autoComplete='off'
                />
                <button id="add-btn" onClick={addTask}>Add Task</button>
            </div>
                 {arrayData.map((singleTask) => {
                     console.log(singleTask)
                     return (
                    <div className={singleTask.isDone ? "isDone todoItems" : "todoItems"}>
                        <div>
                            {singleTask.editClicked ? 
                            <div className='edit-saveBtn'>
                                <input 
                                type="text" 
                                onChange={(e) => setEditText(e.target.value)} 
                                value={editText} 
                                id={"todo-inputText"}
                                />
                                <div className='save-edit'><button className="save-btn" onClick={() => saveTask(singleTask.id)}>Save</button></div>
                            </div>
                            :
                            <p>{singleTask.task}</p>
                            }
                        </div>
                        <div>
                            <button className="done-btn" onClick={() => doneTask(singleTask.id)}>Done</button>
                            <button className="edit-btn" onClick={() => editTask(singleTask.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => deleteTask(singleTask.id)}>Delete</button>
                        </div>
                    </div>)
                    })}
            </div>
    )
}


export default AllTasks;
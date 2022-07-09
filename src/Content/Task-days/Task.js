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
    const [editText, setEditText] =useState("")

    const randomId = new Date().getTime().toString()
    const localDateTime = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`

    const inputData = (val) => {
        setGetData(val.target.value)
        //console.log(val)
    }

    const enterKeyTask = (event) => {
        if (event.key === "Enter") {
            setArrayData((prev) => [{id: randomId, task: getData, isDone: false, editClicked: false, dateTime: localDateTime}, ...prev])
            setGetData("")
        }
    }

    const addTask = () => {
        if (getData === "") {
            alert("Please add a task!")
        } else {
            setArrayData((prev) => [{id: randomId, task: getData, isDone: false, editClicked: false, dateTime: localDateTime}, ...prev])
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
            /* arrayData.forEach((singleTask) => {
                console.log(singleTask.id, id)
                if (singleTask.id === id) {
                    singleTask.editClicked = !singleTask.editClicked}
                    editingText = singleTask.task
                }) */
            setArrayData((prevData) => {
                return prevData.map((singleTask) => {
                    if (id !== singleTask.id) {
                        return singleTask
                    } 
                    return {...singleTask,editClicked: true}
                })
            })
            const editingTask = arrayData.find((singleTask) => singleTask.id === id )
            setEditText(editingTask.task)
            }

    const saveTask = (id) => {
        /* const savingTask = editData.map((singleTask) => {
            if (singleTask.id === id) {
                if (editText === "") {
                    alert("Please add a task!")
                }
                singleTask.task = editText;
                singleTask.dateTime = localDateTime;
                singleTask.editClicked = !singleTask.editClicked}
                return singleTask
        })
        setEditData(savingTask.dateTime) */

        setArrayData((prevData) => {
            return prevData.map((singleTask) => {
                if (id !== singleTask.id) {
                    return singleTask
                } 
                const localDateTime = `${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()}`
                return {...singleTask, task: editText, editClicked: false, dateTime: localDateTime}
            })
        })
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
                onKeyPress={enterKeyTask}
                />
                <button id="add-btn" onClick={addTask}>Add Task</button>
            </div>
                 {arrayData.map((singleTask, index) => {
                     console.log(singleTask)
                     return (
                    <div key={index} className={singleTask.isDone ? "isDone todoItems" : "todoItems"}>
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
                            <div>
                                <p className="dateTime">{singleTask.dateTime}</p>
                                <p>{singleTask.task}</p>
                            </div>
                            }
                        </div>
                        <div className="buttons">
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
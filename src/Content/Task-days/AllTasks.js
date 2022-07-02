import React, {useState} from 'react';
import '../Content.css';

const mockTask = [{
    id: "1",
    name: "doGrocery",
    isDone: false
}, {
    id: "2",
    name: "doDishes",
    isDone: true
}]

function AllTasks(){
    const [getData, setGetData] = useState("")
    const [arrayData, setArrayData] = useState(mockTask)
    //const [doneColor, setDoneColor] = useState()

    const inputData = (val) => {
        setGetData(val.target.value)
        //console.log(val)
    }
    const addTask = () => {
        setArrayData((prev) => [{id: "free", name: getData, isDone: false}, ...prev])
        setGetData("")
    }
    const deleteTask = (index) => {
        setArrayData((prev) => [getData, ...prev])
        // const newList = list.filter((i, itemIndex) => index !== itemIndex) 

    }
    const doneTask = () => {
        //setDoneColor()
        /* const todoItem = document.getElementById('todoItems');
        todoItem.style.backgroundColor = '#39ed24'
        console.log('Am done!') */
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
                 {arrayData.map((singleTask, index) =>
                    <div id="todoItems" key={index}>
                        <div>
                            <p>{singleTask.name}</p>
                        </div>
                        <div>
                            <button onClick={doneTask}>Done</button>
                            <button>Edit</button>
                            <button onClick={() => deleteTask(singleTask.index)}>Delete</button>
                        </div>
                    </div> 
                    )}
            </div>
    )
}


export default AllTasks;
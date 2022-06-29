import React from 'react';
import '../Content.css';

function AllTasks(){
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState('')
    const [todoEditing, setTodoEditing] = React.useState(null)
    const [editingText, setEditingText] = React.useState("")

function handleSubmit(e){
    e.preventDefault()


    const newTodo = {
        id: new Date().getTime(),
        text: todo,
        complete: false
    }
    setTodos([...todos].concat(newTodo))
    setTodo("")
}
function addItem(e){
    const todoTextInput = document.getElementById('todo-inputText');
    const todoText = todoTextInput.value
    if(!todoText){
        alert("Please add a task!")
        return
    }
    todo.id.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            addItem(todo.id)
        }
        todoTextInput.value = ''
    });
}
    function deleteTodo(id){
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)

        setTodos(updatedTodos)
    }
    function editTodo(id){
        const saveBtn = document.getElementById('save-btn');
        saveBtn.style.display = 'none'
        const updatedTodos = [...todos].map((todo) =>{
            if(todo.id === id) {
                todo.text = editingText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText("")
    }
    function TaskDone(e){
        const todoItems = document.getElementById('todoItems');
        todoItems.style.backgroundColor = '#39ed24'
        console.log('Am done!')
    }
    

    return(
        <div className="allTasks">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setTodo(e.target.value)} 
                value={todo} 
                id="todo-inputText"
                autoComplete='off'
                />
                <button type="submit" id="add-btn" onClick={addItem}>Add Task</button>
            </form>
            {todos.map((todo) => 
            <div key={todo.id} id="todoItems">
                <div id="editSave">
                    {todoEditing === todo.id ? 
                    (<input type="text" 
                    onChange={(e) => setEditingText(e.target.value)} 
                    value={editingText} 
                    id="edit-input"
                    />) : (<p>{todo.text}</p>)}
                    
                    <button onClick={() => editTodo(todo.id)} id="save-btn">Save</button>
                </div>
                <div>
                    <button onClick={TaskDone} id="taskDone">Done</button>
                    <button onClick={() => setTodoEditing(todo.id)} id="edit-btn">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)} id="delete-btn">Delete</button>
                </div>
            </div>)}
        </div>
    )
}


export default AllTasks;
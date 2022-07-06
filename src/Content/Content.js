import WeeklyTodoList from './Task-days/WeeklyTodoList';
import './Content.css'


const todoTitle = 'Daily Todos'
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function Content () {
    return (
        <div>
            <header>
                <div className="daily-todo">{todoTitle}</div>
            </header>
            {/*<WeeklyTodoList />*/}
            {days.map((singleDay, index) => (<WeeklyTodoList day={singleDay} key={index}/>))}
        </div>
    )
}

export default Content;
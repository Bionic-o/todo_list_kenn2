import WeeklyTodoList from './Task-days/WeeklyTodoList';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function Content () {
    return (
        <div>
            {/*<WeeklyTodoList />*/}
            {days.map((singleDay, index) => (<WeeklyTodoList day={singleDay}/>))}
        </div>
    )
}

export default Content;
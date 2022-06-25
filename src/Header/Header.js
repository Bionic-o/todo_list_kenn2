const appName = 'NicKenn App'
const todoTitle = 'Daily Todos'
function Header () {
    return (
        <div>
            <div>
            <div className='app-control'>
            <div className='appControl-left'>{appName}</div>
            <div className='appControl-right'>
                <i className="fa-solid fa-window-minimize" id="mini" title='Minimize'></i>
                <i className="fa-brands fa-chromecast" title='Maximize'></i>
                <i className="fa-solid fa-xmark" title='Close'></i>
            </div>
        </div>
        </div>
        <header>
            <div className="daily-todo">{todoTitle}</div>
        </header>
        </div>
    )
}

export default Header;
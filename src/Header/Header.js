const appName = 'NicKenn App'
function Header () {
    return (
        <div>
            <div>
                <div className='app-control'>
                    <div className='appControl-left'>{appName}</div>
                        <div className='appControl-right'>
                        <i className="fa-solid fa-window-minimize" id="mini" title='Minimise'></i>
                        <i className="fa-brands fa-chromecast" title='Maximise'></i>
                        <i className="fa-solid fa-xmark" title='Close'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
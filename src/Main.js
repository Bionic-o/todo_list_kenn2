import Header from "./Header/Header"
import Content from "./Content/Content"
import Sidepane from "./Content/Sidepane"
import Footer from "./Footer/Footer"
import "./main.css"

function Main () {
    return (
        <div className="main-content">
            <div className="left-content">
                <div id="header"><Header /></div>
                <div id="task-content">
                    <Content />
                </div>
                <div><Footer /></div>
            </div>
            <div id="right-content">
                    <Sidepane />
            </div>
        </div>
    )
}

export default Main
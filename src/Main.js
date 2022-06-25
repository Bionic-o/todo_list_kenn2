import Header from "./Header/Header"
import Content from "./Content/Content"
import Sidepane from "./Content/Sidepane"
import Footer from "./Footer/Footer"
import "./main.css"

function Main () {
    return (
        <div className="main-content">
            <div id="left-content">
                <div><Header /></div>
                <div id="task"><Content /></div>
                <div><Footer /></div>
            </div>
            <div id="right-content">
                <Sidepane />
            </div>
        </div>
    )
}

export default Main
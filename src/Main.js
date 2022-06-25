import Header from "./Header/Header"
import Content from "./Content/Content"
import Sidepane from "./Content/Sidepane"
import Footer from "./Footer/Footer"
import "./main.css"

function Main () {
    return (
        <div className="main-content">
            
            <div>
                <div className=""><Header /></div>
                <div id="task">
                    <Content />
                </div>
                <div><Footer /></div>
            </div>
            
            <div id="sidepane">
                    <Sidepane />
            </div>
        </div>
    )
}

export default Main
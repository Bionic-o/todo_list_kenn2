import Header from "./Header/Header"
import Content from "./Content/Content"
import Sidepane from "./Content/Sidepane"
import Footer from "./Footer/Footer"
import "./main.css"

function Main () {
    return (
        <div>
            <Header />
            <div className="main-content">
                <div id="tasks">
                    <Content />
                </div>
                <div id="sidepane">
                    <Sidepane />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main
import Header from "./Header/Header"
import Content from "./Content/Content"
import Sidepane from "./Content/Sidepane"
import Footer from "./Footer/Footer"
import "./main.css"

function Main () {
    return (
        <div>
            <Header />
            <div>
                <Content />
                <Sidepane />
            </div>
            <Footer />
        </div>
    )
}

export default Main
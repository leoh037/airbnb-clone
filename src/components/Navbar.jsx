import logo from "../images/airbnb-logo.png"

function Navbar() { 
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} className="logo"/>
            </div>
        </nav>
    )
}

export default Navbar;
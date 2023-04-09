import backgroundPic from "./1.png"
import logo from "./logo.jpg"
import Navbar from "./Navbar";
import "./Header.css"
function Header({onNav,className}) {
    return(
        <header className={className}>
            <img className="header-background" src={backgroundPic} alt="this is a header background" />
            <div className="header-content">
                <img src={logo} className="header-pic"  alt="This is my logo" />
                <h1 className="header-content-title">My Develop Tool Kits</h1>
                <Navbar className={"header-navbar"} onNav={onNav}/>
            </div>
            
        </header>  
        
    );
}

export default Header ;
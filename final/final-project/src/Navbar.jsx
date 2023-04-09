import "./Navbar.css"
import menu from "./menu.js";
import "./menu.css"
import { useState } from "react";
function Navbar({className,onNav}) {
    const [showmenu,setMenu] = useState(false);
    const list = menu.map((item) => {
        return(
            <li className="navbar-item" key={item.name}>
                 <a href={item.path} onClick={onNav}>{item.name}</a>
             </li>
        );
    });

    const menuHtml = (
        <ul className="navbar-list"> 
             {list}
       </ul>
    );


    return(
        <nav className={`${className} navbar`}>
            <ul className="navbar-menu">
                <li className="navbar-menu_item">
                    <button 
                    className="nav-button"
                    onClick={()=>{
                        setMenu (!showmenu);
                        }}
                    >
                    <i className="gg-menu"></i>    
                    </button>
                    {showmenu && menuHtml}
                </li>   
            </ul>
        </nav>
        
        
    );    
}

export default Navbar;
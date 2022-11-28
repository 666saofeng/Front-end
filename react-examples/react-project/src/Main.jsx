import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { useState,useId } from "react";
function Main({page}){
    const id = useId();
    return(
        <main>
            {(page === "/")&&<Home/>}
            {(page === "./about.html")&&<About/>}
            <label htmlFor={id}> 
            Main:
            </label>
            <input id={id}/>
            
        </main>
    );
}

export default Main;
import Home from "./Home";

function NavBar({setPage}){
    function onNav(event,target){
        event.preventDefault();
        setPage(target);
    }
    
    return(
        <div>
            <a href="ASDF" onClick={(e) =>onNav(e,'Home')
            }>Home</a>
            <a href="ASDF" onClick={(e) =>onNav(e,'About')
            }>About</a>
        </div>
    );
}

export default NavBar;
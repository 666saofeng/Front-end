import GlobalNav from "./GlobalNav";
import './Header.css'
function Header({onNav}){
    return(
        <header className="header">
            <img 
                src="https//placekitten.com/100/100?image=1" 
                className="header__logo"
                alt="Feline Overlords Logo"
            />
            <h1 className="header__title">
                I welcome our Feline Overlords
            </h1>
            <GlobalNav onNav={onNav} className="header__nav"/>
        </header>
    );
}

export default Header;
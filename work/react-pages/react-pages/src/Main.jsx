import Home from './Home';
import About from './About';
import Cats from './Cats'
function Main({page,className,onNav}) {
    
    return(
        <main className={className}>
            {(page === "/") && <Home/>}
            {(page === "/about.html")&&<About/>}
            {(page === "/cats.html")&&<Cats onNav={onNav}/>}
        </main>
    );
}
export default Main;
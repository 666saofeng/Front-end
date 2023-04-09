import Home from "./Home";
import Board from "./Board";
import Library from "./Library";

function Main({page,className,toggleTheme,theme}) {
    return(
        <main className={className}>
            {page === "/"&& <Home page={page}/>}
            {page === "/uilibrary.html" && <Library/>}
            {page === "/setting.html" && <Board theme={theme} toggleTheme={toggleTheme}/>}
        </main>
    );
}

export default Main;
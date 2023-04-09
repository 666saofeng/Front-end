import Form from "./Form";
import "./Home.css"
function Home() {
    return (
        <div className="home">
            <div className="home-text">
                click this button to get new updates.
            </div>
            <Form className={"home-button"}/>
        </div>
    );
}

export default Home;
import Card from "./Card";
import './Cats.css'
function Cats({onNav}) {
    
    return(
        <div className="cats">
        <Card className="cats-card" onNav={onNav}/>
        <Card className="cats-card" onNav={onNav}/>
        <Card className="cats-card" onNav={onNav}/>
        </div>
            
    );
}

export default Cats
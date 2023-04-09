import "./Card.css"
function Card({header,content,className,code,pic}) {
    
    return(
        <div className={`${className} card`} >
            <h2 className="card-title">
                {header}
            </h2>
                <img className="card-pic" src={pic} alt="preview of the UI pattern" />
            <div className="card-text">
                {content}
            </div>
            <button className="card-button" onClick={()=>{navigator.clipboard.writeText(code)}}>copy code</button>
        </div>
    );
}
export default Card;
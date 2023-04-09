import './app.css'
function Reorder({onReorder}){
    return(
        <button className="reorder__button" onClick={onReorder} type="button">Reorder</button>
    );
}
export default Reorder
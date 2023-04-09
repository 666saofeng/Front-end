import Card from "./Card";
import cardPic1 from "./card-example.png"
import cardPic2 from "./card-example2.png"
import cardPic3 from "./card-example3.png"
import "./Library.css";
function Library() {
    return(
        <div className="libray">
         <Card className={'libray-card'} header={"card UI pattern 1"} content={"This is a basic card view"} code={".card{border: 1px solid black;display: flex;flex-direction: column;justify-content: space-between;align-items: center;border-radius: 1rem;}.card-title{text-align: center;}.card-button{width: 5rem;align-items: center;text-align: center;}"} pic={cardPic1}/>
         <Card className={'libray-card'} header={"card UI pattern 2"} content={"This is a card without button"} code={".card_kitten, .card_horse, .card_rabbit{border:   1px solid lightgray;border-radius: 1rem;grid-column: span 12;display: flex;flex-direction: column;align-items: center;margin: 0.25rem;}.card_kitten:hover , .card_horse:hover, .card_rabbit:hover{box-shadow:  2px 2px 5px 5px black;}"} pic={cardPic2}/>
         <Card className={'libray-card'} header={"card UI pattern 3"} content={"This is a card with hover view"} code={".card_kitten, .card_horse, .card_rabbit{border:   1px solid lightgray;border-radius: 1rem;grid-column: span 12;display: flex;flex-direction: column;align-items: center;margin: 0.25rem;.card_horse{background-color:#F1E3F3 ;}}"} pic={cardPic3}/>
        </div>
       
    )
}

export default Library;
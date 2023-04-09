import './Card.css'
function Card({onNav,className}) {
    return(
      <div className={`${className} card`}>
            <img className="card__img" src="https://placekitten.com/300/300?image=2" alt="" />
            <div className="card__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima molestiae odit exercitationem assumenda voluptatibus, corporis magnam aspernatur architecto minus quasi neque debitis. Dicta eius ipsa atque accusantium voluptate velit laborum.
            </div>
            <a className='card__cta' href="/" onClick={onNav}>Home</a>
        </div>
    );
}

export default Card;
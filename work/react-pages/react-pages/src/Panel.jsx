import './Panel.css'
function Panel() {
    
    return(
        <div className="panel">
            <img className="panel-img" src="https://placekitten.com/300/300?image=2" alt="three kittens look at you" />
            <div className="panel-text">
                <h2 className='panel-title'>Lorem ipsum dolor sit amet.</h2>
                <p className="panel-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur molestias repellendus ut.
                </p>
                <p className="panel-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur molestias repellendus ut.
                </p>
                <p className="panel-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur molestias repellendus ut.
                </p>
            </div>
        </div>
    );
}

export default Panel;
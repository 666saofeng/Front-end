import {useId, useState} from 'react'
function Home() {
    const [count,setCount] = useState(0);
    const id = useId();
    return(
        <div>
            <button 
            onClick={
                ()=>{
                    const delay = Math.floor(Math.random()*2000);
                    setTimeout(()=>setCount(count => count+ 1),delay)}}>
                {count}
            </button>


        <input id={`${id}-name`} />
        <input id={`${id}-age`} />
        </div>
    );
}

export default Home;
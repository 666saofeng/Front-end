import { useRef } from "react";
import { useState } from "react";
import "./Form.css"
function Form({className}) {
    const [email,setEmail] =useState("");
    const [check,setCheck] = useState(false);
    const [emailConfirm,setEmailConfirm]=useState(false);
    const [confirm,setConfirm] = useState("");
    const [noteInfo,setInfo] = useState(false);
    const subsribeRef = useRef(null);
    const tipHtml = (
            <div className="tip-info">
                This requried a @
            </div>
    )
    const confirmHtml = (
        <div className="confirm-info">
            This is different from email.
        </div>
    )
    const notesHtml=(
        <div className="registed-info">
            you are registed!
        </div>
    )
    return(
        <div className={className}>
            {noteInfo&&notesHtml}
            <button onClick={()=>{
                subsribeRef.current.showModal();
            }}>Subscribe
            </button>
            <dialog className="form-dialog" ref={subsribeRef}>
                <form className="register" action="/register" method="POST" onSubmit={(e)=>{
                   if (check === false && emailConfirm === false) {
                    e.preventDefault();
                    subsribeRef.current.close()
                    setInfo(!noteInfo);
                   } else {
                    e.preventDefault();
                   }
                }}>
                    <div className="register__email register-email">
                        <label className="register__email-label" htmlFor="email">Email : *required</label>
                        {check&& tipHtml}
                        <input name="email" 
                        className="register-email__input" 
                        value={email}
                        id="email" 
                        type="text"
                        onChange={(e)=>{setEmail(e.target.value);setCheck(!e.target.value.includes('@'))}}/>
                        
                    </div>
                    <div className="register__confirm register-confirm">
                        <label className="register__confirm-label" htmlFor="confirm">Confirm Email: *required</label>
                        {emailConfirm&& confirmHtml}
                        <input 
                        name="confirm" 
                        className="register-confirm__input" 
                        id="confirm" 
                        type="text"
                        value={confirm}
                        onChange={(e)=>{setConfirm(e.target.value);setEmailConfirm(e.target.value !== email)}}/>
                        
                    </div>
                    <button 
                        type="submit" 
                        className="register__submit" 
                        >Subscribe</button>
                    <button 
                        className="register__cancel"
                        onClick={(event)=>{
                        event.preventDefault();
                        subsribeRef.current.close()}}>
                        cancel
                    </button>
                </form>
            </dialog>            
        </div>
    );
}

export default Form;
import React,{ useRef } from "react"
export default function Uncontrolled() {

    const name = useRef(null)
    const name1 = useRef(null)
    const name2 = useRef(null)
    const name3 = useRef(null)
   
    const changeColor1 = () => {
        name3.current.style.color = "yellow"
    }
    const tom = {
        color:"blue"
    }

    const changeColor = () => {
        name.current.style.color = "green"
    }
    
    const steve={
        color:"red"
    }
    const changefocus = () => {
        name1.current.focus()
    }   
    const changefocus1 = () => {
        name2.current.focus()
    }
        return (
     <div>
        <h1 style={steve} ref={name}>hello world</h1>
        <button type='button' onClick={changeColor}>change color</button>
        <br></br>
        <br></br>
        <h1 style={tom} ref={name3}>harshal how are you</h1>
        <button type='button' onClick={changeColor1}>change color</button>
        <br></br>
        <br></br>
        <label htmlFor="">first name:</label>
        <input type="text"/>
        <br></br>
        <br></br>
        <label htmlFor="">last name:</label>
        <input type="text" ref={name1}/>
        <button type='button' onClick={changefocus}>change focus</button>
        <br></br>
        <br></br>
        <label htmlFor="">address:</label>
        <input type="text"/>
        <br></br>
        <br></br>
        <label htmlFor="">email:</label>
        <input type="email" ref={name2}/>
        <button type='button' onClick={changefocus1}>change focus</button>
     </div>
        );
    }

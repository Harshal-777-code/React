import React,{ useRef } from "react"
export default function Uncontrolled() {

    const name = useRef(null)
    const name1 = useRef(null)

    const changeColor = () => {
        name.current.style.color = "green"

    }
    const steve={
        color:"red"
    }
    const changefocus = () => {
        name1.current.focus()
    }   
        return (
     <div>
        <h1 style={steve} ref={name}>hello world</h1>
        <button type='button' onClick={changeColor}>change color</button>
        <br></br>
        <label htmlFor="">first name:</label>
        <input type="text"/>
        <br></br>
        <label htmlFor="">last name:</label>
        <input type="text" ref={name1}/>
        <button type='button' onClick={changefocus}>change focus</button>
     </div>
        );
    }
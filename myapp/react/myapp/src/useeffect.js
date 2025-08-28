import { useEffect, useState } from "react";

export function AvengerEffect(){
    const [power, setPower] = useState(100)
    const [vilpower, setVilpower] = useState(100)


const increase=()=>{
    setPower(power+1)

}

const decrease=()=>{

    setVilpower(vilpower-1)
}
useEffect(
    ()=>{
        console.log("useEffect is called")

        return ()=>{
            console.log("cleanup")
        }
       
    },[]
)

return <>
<h1> Power of Hero is :  {power}</h1> 
<button type="button" onClick={increase}>Increase</button>

<h1> Power of Villain is : {vilpower}</h1>
<button type="button" onClick={decrease}>Decrease</button>
</>

}
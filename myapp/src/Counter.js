import { useState } from "react";
 export function Counter() {
      
    const[count,setCount] = useState(0)
    const increment = () =>  {
        setCount(count + 1)
    }
    
    const reset = () =>  {
        setCount(0)
    }

    const decrement = () =>  {
        setCount(count - 1)
    }



 return <>

        <h1>Count:{count}</h1>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={reset}>Reset</button>
        <button type="button" onClick={decrement}>Decrement</button>
    </>
}
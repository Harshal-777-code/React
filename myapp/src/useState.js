import { useState } from "react";

export function WelcomeFunction() {
     const[ name,setName] = useState('Tony Stark');
     const [heroicName, setHeroicName] = useState('Iron Man')

     const changeName = () => {
        setName('stave Rogers')
        setHeroicName('Captain America')
     }
     return <>
     <h1>hello {name} and Your heroic name is {heroicName}</h1>
     <botton type="button" onClick={changeName}>Change Name</botton>
     </>
}
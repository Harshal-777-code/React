// import { ShieldPass } from "./App";
// import React from "react";
// import ReactDOM from "react-dom/client";

import { use } from "react";


// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<ShieldPass /
// import { ShildPass } from "./App";
// import React from "react";
// import ReactDOM from "react-dom/client";

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<ShildPass />)

/////=====state=====


// import { ShildPass } from "./app";
// import React from "react";
// import ReactDOM from "react-dom/client";
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<ShildPass />)

////====usestetate=====

// import { ShildPass } from "./App";
// import React from "react";
// import ReactDOM from "react-dom/client";

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<ShildPass />)

////====counter=====
// import { ShildPass } from "./App";
// import React from "react";
// import ReactDOM from "react-dom/client";

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<ShildPass />)

///=====cunditional render=====

import { useState } from "react";
import { AvengerWelome } from "./AvengerWelome";
import { WelcomeUser } from "./WelcomeUser";


// export function ShieldPass(props){
//     const isRegistered = true
//     return<ShildPass/>
// }

export function ShildPass(){
const [isRegistered, setIsRegistered] = useState(true);
const login = () =>{ setIsRegistered(true);}
const logout = () =>{ setIsRegistered(false);}
if (isRegistered){
    return <AvengerWelome clickdetail={logout}/>;
}else{
    return <WelcomeUser clickdetail={login}/>;
}   

}

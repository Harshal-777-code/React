// import { App } from "./App";
import {Main} from "./main";
import React from "react";
import ReactDOM from "react-dom/client"


// ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(<App />);
root.render(<Main/>)